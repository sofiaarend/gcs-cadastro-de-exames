var base_url = '../';

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





