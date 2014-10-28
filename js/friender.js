
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function goTo(strLocation){
	window.location.href = strLocation;
}

function loadFrm(strForm){
	
	$("#img001").attr("src","../images/BOTOTIMEL.png");
	$("#img002").attr("src","../images/BOTONAMIGOS.png");
	$("#img003").attr("src","../images/BOTONBONOS.png");
	$("#img004").attr("src","../images/BOTONGRUPO.png");
	$("#img005").attr("src","../images/BOTONNOTIF.png");
	
	switch(strForm){
		case "frm001":
			$("#lblHeader").html("Eres La mejor");
			$("#divMainContent").load("../frm/frm001.html").trigger('create');
			$("#img001").attr("src","../images/BOTOTIMELA.png");
		break;
		case "frm002":
			$("#lblHeader").html("Amigos");
			$("#divMainContent").load("../frm/frm002.html").trigger('create');
			$("#img002").attr("src","../images/BOTONAMIGOSA.png");
		break;
		case "frm003":
			$("#lblHeader").html("Bonos");
			$("#divMainContent").load("../frm/frm003.html").trigger('create');
			$("#img003").attr("src","../images/BOTONBONOSA.png");
		break;
		case "frm004":
			$("#lblHeader").html("Grupos");
			$("#divMainContent").load("../frm/frm004.html?var="+$("#recibirVariable4").val()+"$").trigger('create');
			$("#img004").attr("src","../images/BOTONGRUPOA.png");
		break;
		case "frm005":
			$("#lblHeader").html("Notificaciones");
			$("#divMainContent").load("../frm/frm005.html").trigger('create');
			$("#img005").attr("src","../images/BOTONNOTIFA.png");
		break;
		
                case "frm006":
			$("#lblHeader").html("Notificaciones");
			$("#divMainContent").load("../frm/frmGrupo.html").trigger('create');
			$("#img006").attr("src","../images/BOTONNOTIFA.png");
		break;
		default:
			$("#divMainContent").html("No se pudo cargar!").trigger('create');
	}

}

function loadFrm2(strForm){
	
	$("#img001").attr("src","../images/ESTADCLIENTES.png");
	$("#img002").attr("src","../images/BOTONBONOS.png");
	$("#img003").attr("src","../images/FRCLIENTE.png");
	$("#img004").attr("src","../images/BOTONNOTIF.png");
	
	switch(strForm){
		case "frm001":
			$("#lblHeader").html("Estadisticas basicas");
			$("#divMainContent").load("../frm/frmEstadistica.html").trigger('create');
			$("#img001").attr("src","../images/ESTADCLIENTESA.png");
		break;
		case "frm002":
			$("#lblHeader").html("Bonos Activos");
			$("#divMainContent").load("../frm/frmBonosE.html").trigger('create');
			$("#img002").attr("src","../images/BOTONBONOSA.png");
		break;
		case "frm003":
			$("#lblHeader").html("Friender a tu servicio");
			$("#divMainContent").load("../frm/frm009.html").trigger('create');
			$("#img003").attr("src","../images/FRCLIENTEA.png");
		break;
		case "frm004":
			$("#lblHeader").html("Notificaciones");
			$("#divMainContent").load("../frm/frm010.html").trigger('create');
			$("#img004").attr("src","../images/BOTONNOTIFA.png");
		break;
		default:
			$("#divMainContent").html("No se pudo cargar!").trigger('create');
	}

}