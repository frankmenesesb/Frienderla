<?php
$blResp = false;

    $strMessage = "";
include("config.php");
$link = mysqli_connect($datos[0],$datos[1],$datos[2],$datos[3]);
if (!$link) {
        $blResp = false;
        die('Could not connect: ' . mysqli_error($link));
        $strMesage = "No fue posible conectarse: ".mysqli_error($link);
    }
    
 mysqli_select_db($link,"friender");
 
 
 
if (isset($_FILES['archivo'])) {
    $archivo = $_FILES['archivo'];
    $extension = pathinfo($archivo['name'], PATHINFO_EXTENSION);
	$time = time();
    $usuario=$_POST["nombre_archivo"];    
    $nombre = "{$_POST['nombre_archivo']}_$time.$extension";
    if (move_uploaded_file($archivo['tmp_name'], "photos/$nombre")) {
        echo 1;
        
        $query = sprintf("INSERT INTO fotos (usuario,nombre) VALUES ('$usuario','$nombre')");

$result = mysqli_query($link,$query);

mysqli_close($link);



        
        
    } else {
        echo 0;
    }
}
?>
