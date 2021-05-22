var base_url = '../';
var storage = localStorage.getItem("exames")
var exames = storage ? JSON.parse(storage) : [];
var paciente = sessionStorage.getItem("usuario");
console.log(exames)

for (var i = 0; i > exames.length; i++) {
   // if (exames[i].id == paciente) {
        $('#tablePaciente tbody').append(
           `<tr>
                <td>${exames[i].id}</td>
                <td>${exames[i].med}</td>
                <td>${exames[i].paciente}</td>
                <td>${exames[i].dataExame}</td>
                <td>${exames[i].exame}</td>
                <td>${exames[i].status}</td>
            </tr>`
        )
    //}
}

$("#btn-paciente").click(function () {
    var id = document.getElementById("idinput").value
    for (var i = 0; i > exames.length; i++) {
        exames[i].status = "inativo"
    }
});
