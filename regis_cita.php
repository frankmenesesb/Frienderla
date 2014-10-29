<?php
include("config.php");


    $blResp = false;

    $strMessage = "";

$nombre = htmlspecialchars(trim($_REQUEST['nombre']));
$hora = htmlspecialchars(trim($_REQUEST['hora']));
$lugar = htmlspecialchars(trim($_REQUEST['lugar']));
$fecha = htmlspecialchars(trim($_REQUEST['fecha']));
$tipo = htmlspecialchars(trim($_REQUEST['tipo']));

$login = htmlspecialchars(trim($_REQUEST['usuario']));


$link = mysqli_connect($datos[0],$datos[1],$datos[2],$datos[3]);
$blResp = true;

if (!$link) {
        $blResp = false;
        die('Could not connect: ' . mysqli_error($link));
        $strMesage = "No fue posible conectarse: ".mysqli_error($link);
    }

mysqli_select_db($link,"friender");
$query = sprintf("SELECT nombre FROM citas WHERE usuario='$login' and nombre='$nombre'");
$result = mysqli_query($link,$query);
if(mysqli_num_rows($result)){
    $strMessage = "cita ya existe por favor verifica!!";
} else {
mysqli_free_result($result);


$query = sprintf("INSERT INTO citas (nombre,tipo,usuario,hora,fecha,lugar) VALUES ('$nombre','$tipo','$login','$hora','$fecha','$lugar')");

$result = mysqli_query($link,$query);


$arrayData = array();


if(mysqli_affected_rows($link)){
 $strMessage = "la cita ha sido creada con exito!!";

   
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