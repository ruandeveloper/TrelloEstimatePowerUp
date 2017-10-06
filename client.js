//DECLARANDO VARIAVEIS
var totallist = [];
var totallista = [];
var cardUsado = [];
var repeticao = [];
var hora = 0;
var total;
var cardAberto = [];
var atualize = false;
var tanahora = false;
var ICON = 'https://cdn.glitch.com/5604e035-f1e2-4a49-b355-f184d6a83a48%2Fclock.png?1506366848851';
//FIM DA DECLARAÇÃO DE VARIAVEIS ----------------------

/* global TrelloPowerUp */
TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		  return [{
			  icon: ICON,
			  text: 'Estimate',
        callback: function(t) {
          return t.popup({
            title: "CRIAR ESTIMATIVA",
            url: 'estimate.html',
          });
        }
		  }];
	    },
  
    'card-badges': function(t, options, callback) {
    
    //PEGAR O ID DA LIST DO CARD ATUAL
      return t.card('idList', 'id', 'closed', 'name').then(function (card) { 
    
    //PEGAR O ESTIMATE DO CARD(QUANTIDADE DE HORAS) ESTIMATE É O NOME DO PLUGIN
      return t.get('card', 'shared', 'estimate').then(function(estimate) {
      
    //PEGAR A QUANTIDADE DE CARDS NA LIST
      return t.list('cards', 'name').then(function (list) {
        
          //NO COMEÇO O VALOR DA ARRAY VAI SER NULO, COMO VAMOS TRABALHAR COM NUMEROS, VAMOS DEIXA-LA COM O VALOR 0 PARA COMEÇAR
                    if (totallist[card.idList] == undefined){
                        totallist[card.idList] = 0;
                    }
                    if (estimate == undefined){
                      estimate = 0
                    }
                    if (cardAberto[card.id] == undefined){
                      cardAberto[card.id] = false
                    }
          // FIM----------------------------------------------------------------------------------------------
          
          //CALCULAR TOTAL DE HORAS DE CADA LISTA PEGANDO O (ESTIMATE) DE CADA CARD
              if(cardAberto[card.id] == true){
                  totallist[card.idList] = totallist[card.idList] - estimate
                  cardAberto[card.id] = false
              }
        
              if(cardAberto[card.id] == false|tanahora == true){
                    for (var i = 0; i < list.cards.length; i++) 
                        {
                        totallista[card.idList] = parseInt(totallist[card.idList]) + parseInt(estimate);
                          console.log("O card "+card.name+" ||"+estimate+ " + "+ " "+totallist[card.idList])
                        }
        
                    totallist[card.idList] = totallista[card.idList];
                    console.log("A lista "+list.name+" tem "+totallist[card.idList])
               }

                console.log(card.name + " está: " + cardAberto[card.id])
          //FIM-----------------------------------------------------------------------------------------------               
     
          //RETURN PARA MOSTRAR A QUANTIDADE DE HORAS DO CARD ATUAL
                return [{
                    icon: estimate ? ICON : ICON,
                    text: estimate ? estimate + "h" :  'NÃO ESTIMADO!',
                    color: estimate ? 'blue' : 'red',
                },
                
                {
                //USAR O dynamic PARA DEIXAR O CAMPO ATUALIZADO
                  dynamic: function(){
             
                //RETURN PARA MOSTRAR A QUANTIDADE TOTAL DE HORAS DA LIST DO                  
                return {
                    text: totallist[card.idList] ? totallist[card.idList]/2 + ' h' + ' TEM ESSA LISTA' : "ESSA LISTA NÃO TEM NADA...",
                    icon: ICON,
                    color: 'yellow',
                    refresh: 0.01,
                }}}];
      });
      });
      });
  },   
            
  'card-detail-badges': function(t, options) {
       return t.get('card', 'shared', 'estimate').then(function(estimate) {
           console.log("ABRIU O POWER UP");
         
           return t.card('id').then(function (card) { 
             cardAberto[card.id] = true
             
              return [{
                title: '⌚TEMPO NECESSARIO',
                text: estimate ? estimate : 'NÃO ESTIMADO!',
                color: estimate ? 'blue' : 'red',
                callback: function(t) {
                return t.popup({
                  title: "CRIAR ESFORÇO",
                  url: 'estimate.html',
            });
          }
        }]
  },              
)})}
})
//teste refresh
/*
var intervalo = window.setInterval(lerolero, 1500);
function lerolero() {
 tanahora = true
  console.log("bora atualizar")
}
*/
