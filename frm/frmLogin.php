<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Friender</title>
	<link rel="shortcut icon" href="../favicon.ico">
	<link rel="stylesheet" href="../css/themes/default/jquery.mobile-1.4.4.min.css">
	<link rel="stylesheet" href="../css/jqm-demos.css">
	<link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
	<script src="../js/jquery.js"></script>
	<script src="../js/jquery.mobile-1.4.4.min.js"></script>
	<script src="../js/friender.js"></script>
        <script>
        function llevar() {
                
                

                location.href = '../frm/frmMain.html';
            }
        </script>
</head>

<body>
   
<div id="fb-root"></div>

<div data-role="page" class="jqm-demos jqm-home">
	
	<div data-role="header" id="divHeader">
		<a href="#" class="orangeBkg" style="border:none !important;border:0px solid !important;"><img style="border:none !important;border:0px solid;" src='../images/back.png' width="17px" onclick="goTo('../index.html')"></a>
		<h1>Iniciar Sesión</h1>
                <button type="input" class="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-right" data-iconshadow="false" data-corners="false" onclick="llevar();" >Siguiente</button>
	</div>
    <center>
    <div role="main" style="background: #fff; width: 90%; height: 90%;">
		<fieldset>
		<legend></legend>
		<table width="100%" align="center">
			<tr>
				<td align="center">
                                    <img src="../images/ima_log.PNG" class="imagenLog"/>
				</td>
			</tr>
			<tr>
				<td>
					<input type="text" name="txtUsuario" id="txtUsuario" value="" placeholder="Usuario/Empresa">
				</td>
			</tr>
			<tr>
				<td>
					<input type="text" name="txtContrasena" id="txtContrasena" value="" placeholder="Contraseña">
				</td>
			</tr>
		</table>
		</fieldset>
		
		<table width="100%" align="center">
			<tr>
				<td width="100%" align="center"><a class="href" href="#">Olvide mi Contraseña</a></td>
			</tr>
			<tr>
				<td width="100%" align="center"><a class="href" href="#">¿Problemas con fotodetección?</a></td>
			</tr>
		</table>
	</div><!-- /content -->
    </center>

</div><!-- /page -->

</body>
</html>