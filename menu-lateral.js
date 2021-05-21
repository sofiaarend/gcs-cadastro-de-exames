var tipo_usuario = sessionStorage.getItem("tipo_usuario");
var usuario = sessionStorage.getItem("usuario");

atualizaUsuarios()
function atualizaUsuarios() {
	var usuarios = localStorage.getItem("task");

	$('.usuario').empty();
	$('#usu_adm').append('<option value="null">Usuário</option>');
	$('#usu_med').append('<option value="null">Usuário</option>');
	$('#usu_pac').append('<option value="null">Usuário</option>');
	
	if (usuarios.length > 0) {
		var lista = JSON.parse(usuarios);
		var count_adm = 1;
		var count_med = 1;
		var count_pac = 1;
		lista.forEach(function(param) {
			if(param.date == 'adm') {
				$('#usu_adm').append('<option value="'+count_adm+'">'+param.name+'</option>');
				count_adm+=1;
			} else if (param.date == 'med') {
				$('#usu_med').append('<option value="'+count_med+'">'+param.name+'</option>');
				count_med+=1;
			} else {
				$('#usu_pac').append('<option value="'+count_pac+'">'+param.name+'</option>');
				count_pac+=1;
			}
		});
	}
}

$('#funcao').change(function() { 
	$('.usuario').hide();
	tipo_usuario = $(this).val();
	sessionStorage.setItem("tipo_usuario",tipo_usuario);
	switch (tipo_usuario) {
		case 'adm':
			$('#usu_adm').show();
			break;
		case 'med':
			$('#usu_med').show();
			break;
		case 'pac':
			$('#usu_pac').show();
			break;
		default:
			window.location.href = base_url+"index.html";
			break;
	}
});

$('.usuario').change(function() {
	usuario = $(this).val();
	sessionStorage.setItem("usuario", usuario);
	switch (tipo_usuario) {
		case 'adm':
			window.location.href = base_url+"admin/index.html";
			break;
		case 'med':
			window.location.href = base_url+"medico/index.html";
			break;
		case 'pac':
			window.location.href = base_url+"paciente/index.html";
			break;
		default:
			window.location.href = base_url+"index.html";
			break;
	}
});