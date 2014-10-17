<?php
include("config.php");


    $blResp = false;

    $strMessage = "";

$musica = htmlspecialchars(trim($_REQUEST['musica']));
$pelicula = htmlspecialchars(trim($_REQUEST['pelicula']));
$deporte = htmlspecialchars(trim($_REQUEST['deporte']));
$comida = htmlspecialchars(trim($_REQUEST['comida']));
$login = htmlspecialchars(trim($_REQUEST['usuario']));


$link = mysqli_connect($datos[0],$datos[1],$datos[2],$datos[3]);
$blResp = true;

if (!$link) {
        $blResp = false;
        die('Could not connect: ' . mysqli_error($link));
        $strMesage = "No fue posible conectarse: ".mysqli_error($link);
    }

mysqli_select_db($link,"friender");
$query = sprintf("SELECT id_usuarios_gustos FROM gustos WHERE id_usuarios_gustos='$login'");
$result = mysqli_query($link,$query);
if(mysqli_num_rows($result)){
    $strMessage = "gustos de Usuario ya existen por favor intentalo de nuevo!!";
} else {
mysqli_free_result($result);


$query = sprintf("INSERT INTO gustos (pelicula,musica,comida,deporte,id_usuarios_gustos) VALUES ('$pelicula','$musica','$comida','$deporte','$login')");

$result = mysqli_query($link,$query);


$arrayData = array();


if(mysqli_affected_rows($link)){
 $strMessage = "los gustos del usuario ha sido guardado con exito!!";

   
} else {
 $strMessage = "EMPTY";
}






}


mysqli_close($link);

$arrayResp = array(
    'RESPONSE'  => $blResp,
    'MESSAGE'   => $strMessage
    //'DATA'      => $arrayData
);

echo json_encode($arrayResp);