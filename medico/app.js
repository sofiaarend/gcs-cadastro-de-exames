var base_url = '../';

$(document).ready(function(){
  $(".err").hide();
  $(".check").click(function(){

    if($("input:checkbox").filter(":checked").length > 1){
      $(".err").show();
        return false;
  
    } else{

      $(".err").hide();
        return true;
    }

  })

})

var cod = 0;

function increment(){
n++;
return n;
}

var solicitacoes = [];
const addSolic = (ev) => {
  ev.preventDefault();
  function increment();
  let solic = {
    id: Date.now(),
    cod: n,
    paciente: document.getElementById('tecno').value,
    data: document.getElementByName('data').value,
    exame: document.getElementById('listaExames').value,
    med_solic: document.getElementById('usu_med').value,
  }
  solicitacoes.push(solic);
  document.forms[0].reset();
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('botao').addEventListener('click', addSolic);
});


