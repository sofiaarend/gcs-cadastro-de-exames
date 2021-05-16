var tipo_usuario = sessionStorage.getItem("tipo_usuario");
var usuario = sessionStorage.getItem("usuario");

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
			window.location.href = "index.html";
			break;
	}
});

$('.usuario').change(function() {
	usuario = $(this).val();
	sessionStorage.setItem("usuario", usuario);
	switch (tipo_usuario) {
		case 'adm':
			window.location.href = "admin/index.html";
			break;
		case 'med':
			window.location.href = "medico/index.html";
			break;
		case 'pac':
			window.location.href = "paciente/index.html";
			break;
		default:
			window.location.href = "index.html";
			break;
	}
});