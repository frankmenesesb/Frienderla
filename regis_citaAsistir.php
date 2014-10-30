<?php
include("config.php");


    $blResp = false;

    $strMessage = "";

$id = htmlspecialchars(trim($_REQUEST['id']));
$login = htmlspecialchars(trim($_REQUEST['usario']));


$link = mysqli_connect($datos[0],$datos[1],$datos[2],$datos[3]);
$blResp = true;

if (!$link) {
        $blResp = false;
        die('Could not connect: ' . mysqli_error($link));
        $strMesage = "No fue posible conectarse: ".mysqli_error($link);
    }

mysqli_select_db($link,"friender");
$query = sprintf("SELECT usuario FROM cita_usuarios WHERE usuario='$login' and idcita='$id'");
$result = mysqli_query($link,$query);
if(mysqli_num_rows($result)){
    $strMessage = "Ya asistiras a esta cita!!";
} else {
mysqli_free_result($result);


$query = sprintf("INSERT INTO cita_usuarios (usuario,idcita) VALUES ('$login','$id')");

$result = mysqli_query($link,$query);


$arrayData = array();


if(mysqli_affected_rows($link)){
 $strMessage = "Felicitacions asistiras a este evento!!";

   
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