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
