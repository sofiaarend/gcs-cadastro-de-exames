
var base_url = '../';
var n = 0;

function increment() {
  n++;
  return n;
}

$(document).ready(function() {
  $('#enviar').on('click', function() {
    var solicitacoes;
  
    if(localStorage.getItem("exames") != null) {
      solicitacoes = JSON.parse(localStorage.getItem("exames"));
    }
    else {
      solicitacoes = [];
    }
  
    let solic = {
      id: solicitacoes.length + 1,
      paciente: document.getElementById('tecno').value,
      dataExame: document.getElementById('data').value,
      exame: document.getElementById('solicExames').value,
      med: document.getElementById('solic_med').value,
      status: "ativo"
    }
  
    solicitacoes.push(solic);
    document.forms[0].reset();
    localStorage.setItem("exames", JSON.stringify(solicitacoes));
  });
})