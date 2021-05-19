var base_url = '../';

var solicitacoes = [];
const addSolic = (ev) => {
  ev.preventDefault();

  let currentDate = new Date().toISOString().split('T')[0];
  let solic = {
    id : currentDate,
    paciente: document.getElementById('tecno').value,
    dataExame: document.getElementById('data').value,
    exame: document.getElementById('solicExames').value,
    med: document.getElementById('solic_med').value,
  }
  solicitacoes.push(solic);
  document.forms[0].reset();

  console.warn('added', {solicitacoes});
  let pre = document.querySelector('#msg pre');
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('botao').addEventListener('click', addSolic);
})


