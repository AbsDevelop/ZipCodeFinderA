// This is a JavaScript file

$(document).on("click", "#buscar", function(){
  $.ajax({
    type:"get", //Como vou enviar
    url:"http://viacep.com.br/ws/"+$("#cep").val()+"/json/", //Para onde vou enviar
    success: function(data){ //Execução bem sucedida
      var conteudo;
      conteudo = "<p><strong>CEP: </strong>"+data.cep+"</p>";
      conteudo += "<p><strong>Logradouro: </strong>"+data.logradouro+"</p>";
      conteudo += "<p><strong>Bairro: </strong>"+data.bairro+"</p>";
      conteudo += "<p><strong>Localidade: </strong>"+data.localidade+"</p>";
      conteudo += "<p><strong>UF: </strong>"+data.uf+"</p>";
      conteudo += "<p><strong>DDD: </strong>"+data.ddd+"</p>";
      
      $("#dados").html(conteudo);
    },
    error: function(){ //Execução mal sucedida
      alert("Deu erro :(");
    }
  });
});