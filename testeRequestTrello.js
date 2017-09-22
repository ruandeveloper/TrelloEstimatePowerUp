//CRIANDO AS REQUESTS------------------------------------------------------

//ESSA AQUI VAI BUSCAR AS LISTAS APARTIR DA BOARD
var requestlist = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.trello.com/1/boards/SsTUzo2K/lists?fields=name%2Curl&key=a15c445a9a0bc0efd2332aac48bd1bfc&token=01e8f3762fa91f254aae825f349abb1ec6adb1c8fadb7f03b9d28e3e62127584",
  "method": "GET"
}

//ESSA AQUI VAI BUSCAR OS CARDS E TAMBÉM A PARTIR DA BOARD | OBS: DEPOIS VOU AGRUPAR OS CARDS AS LISTAS
var requestcard = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.trello.com/1/boards/SsTUzo2K/cards?fields=name,url,idList,shortLink&key=a15c445a9a0bc0efd2332aac48bd1bfc&token=01e8f3762fa91f254aae825f349abb1ec6adb1c8fadb7f03b9d28e3e62127584",
  "method": "GET"
}

//FIM DOS REQUESTS --------------------------------------------------------------------------------------

//AJAX DO REQUEST DAS LISTAS REQUESTLIST
$.ajax(requestlist).done(function (listas) {
  console.log(listas);

  document.write("LISTAS DA BOARD:<BR><HR>");

  alert("ESSE REQUEST GEROU " + listas.length + " RESULTADOS");

  //FOR DAS LISTAS-----------------------------------------------------------------------------------
  for (var i = 0; i < listas.length; i++) {
    document.write(listas[i].name + " | id= " + listas[i].id + "<br>");
  }
  //FIM DA FOR LISTAS --------------------------------------------------------------------------------   
});

//AJAX DOS CARDS REQUESTCARD
$.ajax(requestcard).done(function (cards) {
  console.log(cards);
  document.write("<HR>CARDS DA BOARD:<BR><BR>");
  for (var i = 0; i < cards.length; i++) {
    //PEGANDO O VALOR CONTIDO DENTRO DAS CUSTOM FIELDS (pluginData)
    var requestplugin = {
      "async": false,
      "crossDomain": true,
      "url": "https://api.trello.com/1/cards/" + cards[i].shortLink + "/pluginData?key=a15c445a9a0bc0efd2332aac48bd1bfc&token=01e8f3762fa91f254aae825f349abb1ec6adb1c8fadb7f03b9d28e3e62127584",
      "method": "GET"
    }
 
    document.write(cards[i].name + " | id= " + cards[i].id + "<BR>ID DA LIST:  " + cards[i].idList + "<BR>ID COMPACTO:  " + cards[i].shortLink + "<br>");

    $.ajax(requestplugin).done(function (plugin) {
      console.log(plugin);
      $num = plugin[0].value.replace(/[^\d]+/g, '');
      $num.replace(/[^\d]+/g, '');
      $num = $num.substr(1); //!!!DELETEI O PRIMEIRO NUMERO QUE ERA 2, POIS ESSE ERA PARTE DO CODIGO DA FIELDS ||OBS: DEVO CORRIGIR ISSO DEPOIS
      document.write("O PLUGIN :" + $num + "<BR><BR>");

      //FIM DA FOR CARDS --------------------------------------------------------------------------------  
    })
  }
});

