var base_url = '../';

$(document).ready(function ()
{
    $("#btn-medicos").click(function ()
    {
        getOccurance("médico");
    });


    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("table tr td:gt(1)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;
        });

        alert("O número de  "+word + "s é " + (noOfOccurance));

    }

})

$(document).ready(function ()
{
    $("#btn-pacientes").click(function ()
    {
        getOccurance("paciente");
    });


    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("table tr td:gt(1)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++ ;
        });

        alert("O número de  "+word + "s é " + ((noOfOccurance + 1) -1) );

    }

})

$(document).ready(function ()
{
    $("#btn-autorizacoes").click(function ()
    {
        alert("O número de autorizações emitidas é 10.");
    });
})

$(document).ready(function ()
{
    $("#btn-percentual").click(function ()
    {
        alert("O percentual de autorizações com exames já realizados é 45%.");
    });
})


function pesquisarNome() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("pesquisa");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


var table = document.getElementById("tableBody");

const listaUsuarios = [];

window.addUserToTable = function addUserToTable(obj) {
  var row = table.insertRow(0);
  var cellName = row.insertCell(0);
  var cellDate = row.insertCell(1);
  var cellListagens = row.insertCell(2);
  cellName.innerHTML = obj.name;
  cellDate.innerHTML = obj.date;
  cellListagens.innerHTML = obj.listagens;
  addToStorage();
}



window.submitForm = function submitForm() {
  var addTaskName = document.getElementById("taskName").value;
  var addTaskDate = document.getElementById("funcaocadastro").value;
  var taskSomething = getUserObj(addTaskName, addTaskDate);
  listaUsuarios.push(taskSomething);
  addUserToTable(taskSomething);
};

window.getUserObj = function getUserObj(taskName, taskData, taskListagens) {
  var taskObject = {
    name: taskName,
    date: taskData,
    listagens: '',
  };
  return taskObject;
}

window.addToStorage = function addToStorage() {
  var storedArray = JSON.stringify(listaUsuarios);
  localStorage.setItem("task", storedArray);
}

try{
window.buildTable = function buildTable() {
  var retrievedTaskObject = localStorage.getItem("task");
  var parsedObject = JSON.parse(retrievedTaskObject);
  for (i = 0; i < parsedObject.length; i++) {
    listaUsuarios.push(getUserObj(parsedObject[i].name, parsedObject[i].date));
    addUserToTable(parsedObject[i]);
  }
}

buildTable();
} catch (err){
    throw new Error("Cadastre um funcionário primeiro");
    
}






