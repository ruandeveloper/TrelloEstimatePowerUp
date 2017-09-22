var requestlist = {
  async: true,
  crossDomain: true,
  url:
    "https://api.trello.com/1/boards/SsTUzo2K/lists?fields=name%2Curl&key=a15c445a9a0bc0efd2332aac48bd1bfc&token=01e8f3762fa91f254aae825f349abb1ec6adb1c8fadb7f03b9d28e3e62127584",
  method: "GET"
};

var primeiraVariavel;
primeiraVariavel = "OLÁ ESSE É UM TESTE DE REQUESTS";
var hora;
var total;
total = 0;

alert(primeiraVariavel);

$.ajax(requestlist).done(function(listas) {
  console.log(listas);

  document.write("<font face='calibri'>TESTANDO O REQUEST:<BR>");

  for (var i = 0; i < listas.length; i++) {
    total = 0;

    var requestcard = {
      async: false,
      crossDomain: true,
      url:
        "https://api.trello.com/1/lists/" +
        listas[i].id +
        "/cards?key=a15c445a9a0bc0efd2332aac48bd1bfc&token=01e8f3762fa91f254aae825f349abb1ec6adb1c8fadb7f03b9d28e3e62127584",
      method: "GET"
    };

    document.write(
      "<hr><font color='red'>LISTA: </font>" +
        listas[i].name +
        " | id= " +
        listas[i].id +
        "<br>"
    ); //<-- passar para baixo depois
    $.ajax(requestcard).done(function(cards) {
      console.log(cards);

      if (cards.length == 0) {
        document.write(
          "<br><font color='green'>OPPS... ESSA LISTA NÃO TEM CARD</font><br>"
        );
      } else {
        document.write("<BR><font color='red'>CARDS DESSA LISTA:</font><BR>");

        for (var c = 0; c < cards.length; c++) {
          //PEGANDO O VALOR CONTIDO DENTRO DAS CUSTOM FIELDS (pluginData)
          var requestplugin = {
            async: false,
            crossDomain: true,
            url:
              "https://api.trello.com/1/cards/" +
              cards[c].shortLink +
              "/pluginData?key=a15c445a9a0bc0efd2332aac48bd1bfc&token=01e8f3762fa91f254aae825f349abb1ec6adb1c8fadb7f03b9d28e3e62127584",
            method: "GET"
          };

          document.write(
            cards[c].name +
              " | id= " +
              cards[c].id +
              "<BR>ID DA LIST:  " +
              cards[c].idList +
              "<BR>ID COMPACTO:  " +
              cards[c].shortLink +
              "<br>"
          );

          $.ajax(requestplugin).done(function(plugin) {
            console.log(plugin);
            $num = plugin[0].value.replace(/[^\d]+/g, "");
            $num.replace(/[^\d]+/g, "");
            
            $num = $num.substr(1); //!!!DELETEI O PRIMEIRO NUMERO QUE ERA 2, POIS ESSE ERA PARTE DO CODIGO DA FIELDS ||OBS: DEVO CORRIGIR ISSO DEPOIS
            document.write("O PLUGIN :" + $num + "<BR><BR>");

            hora = $num;
          });
          total = parseInt(total) + parseInt(hora);
        }
      }
    });

    document.write("ESSA LISTA TEM: " + total + "HORAS<BR><BR>");
  } //FIM DO FOR
}); //FIM DO AJAX
