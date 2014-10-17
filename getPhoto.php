<?php

    include("config.php");

    $blResp = false;

    $strMessage = "";

    $login =intval($_REQUEST['usuario']);

    $con = mysqli_connect($datos[0],$datos[1],$datos[2],$datos[3]);
    $blResp = true;
    
    if (!$con) {
        $blResp = false;
        die('Could not connect: ' . mysqli_error($con));
        $strMesage = "No fue posible conectarse: ".mysqli_error($con);
    }

    mysqli_select_db($con,"ajax_demo");

//echo $login;
//$sql="SELECT * FROM user WHERE id = '".$q."'";
$sql="SELECT foto FROM usuarios WHERE login = '".$login."'";
$result = mysqli_query($con,$sql);

$arrayData = array();

while($row = mysqli_fetch_assoc($result)) {
    array_push($arrayData,$row);
}

if(count($arrayData) === 0){
    $strMessage = "EMPTY";
}

mysqli_close($con);

$arrayResp = array(
    'RESPONSE'  => $blResp,
    'MESSAGE'   => $strMessage,
    'DATA'      => $arrayData
);

echo json_encode($arrayResp);

