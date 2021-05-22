
var base_url = '../';

function carregarSelects() {
  var task = JSON.parse(localStorage.getItem("task"));

  if(task.length > 0) {
    var medico = [];
    var paciente = [];

    task.forEach((value) => {
      //Aqui está checando date por que está errado na página admin, o localStorage está salvando a função na variavel date, o correto seria value.funcao == ....
      switch(value.date) {
        case 'médico':
          medico.push(value);
          break;
        case 'paciente':
          paciente.push(value);
          break;
      }
    });

    medico.forEach((value) => {
      $('#solic_med').append(`<option value="${value.name}">${value.name}</option>`)
    })

    paciente.forEach((value) => {
      $('#tecno').append(`<option value="${value.name}">${value.name}</option>`);
      $('#selectFiltroPaciente').append(`<option value="${value.name}">${value.name}</option>`);      
    })
  }
}

$(document).ready(function () {
  carregarSelects();

  $('#enviar').on('click', function () {
    var solicitacoes;

    if (localStorage.getItem("exames") != null) {
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
      status: "Ativo"
    }

    solicitacoes.push(solic);
    document.forms[0].reset();
    localStorage.setItem("exames", JSON.stringify(solicitacoes));
  });

  $('#filtroTipo').on('change', function () {
    $('#tabelaExames > tbody').empty();
    $('#filtroExame').hide();
    $('#filtroPaciente').hide();

    if ($('#filtroTipo :selected').val() == 'Paciente') {
      $('#filtroExame').hide();
      $('#filtroPaciente').show();
    }
    
    if ($('#filtroTipo :selected').val() == 'Tipo de Exame') {
      $('#filtroPaciente').hide();
      $('#filtroExame').show();
    }
  })

  $('#selectFiltroExame').on('change', function () {
    $('#tabelaExames > tbody').empty();

    var exames = JSON.parse(localStorage.getItem("exames"));
    var selecionado = $('#selectFiltroExame :selected').val();

    exames.forEach((value) => {
      if (value.exame == selecionado) {
        $('#tabelaExames > tbody').append(`
          <tr>
            <td>${value.id}</td>
            <td>${value.med}</td>
            <td>${value.paciente}</td>
            <td>${value.dataExame}</td>
            <td>${value.exame}</td>
            <td>${value.status}</td>
          </tr>
        `)
      }
    });
  });

  $('#selectFiltroPaciente').on('change', function () {
    $('#tabelaExames > tbody').empty();

    var exames = JSON.parse(localStorage.getItem("exames"));
    var selecionado = $('#selectFiltroPaciente :selected').val();

    exames.forEach((value) => {
      if (value.paciente == selecionado) {
        $('#tabelaExames > tbody').append(`
          <tr>
            <td>${value.id}</td>
            <td>${value.med}</td>
            <td>${value.paciente}</td>
            <td>${value.dataExame}</td>
            <td>${value.exame}</td>
            <td>${value.status}</td>
          </tr>
        `)
      }
    });
  });
})