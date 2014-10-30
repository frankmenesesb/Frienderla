<?php

    include("config.php");

    $blResp = false;

    $strMessage = "";

    //$q = intval($_REQUEST['strUser']);
    
    //$login = htmlspecialchars(trim($_REQUEST['usuario']));
    //$pass1 = sha1(md5(trim($_REQUEST['contrasena'])));

    $con = mysqli_connect($datos[0],$datos[1],$datos[2],$datos[3]);
    $blResp = true;
    
    if (!$con) {
        $blResp = false;
        die('Could not connect: ' . mysqli_error($con));
        $strMesage = "No fue posible conectarse: ".mysqli_error($con);
    }

    mysqli_select_db($con,"friender");


$sql="SELECT c.idcitas,c.nombre descripcion, c.tipo, c.hora, c.fecha, c.lugar, u.nombre, u.apellidos
FROM citas c, usuarios u
where u.login=c.usuario
order by c.idcitas desc";
//$sql="SELECT id, nombre, apellidos, login, foto FROM usuarios WHERE login= '$login' and password='$pass1'";
$result = mysqli_query($con,$sql);

$arrayData = array();

while($row = mysqli_fetch_assoc($result)) {
    array_push($arrayData,$row);
    
    
}

if(count($arrayData) === 0 || count($arrayData) === null || count($arrayData) === ''){
    $strMessage = "EMPTY";
}



mysqli_close($con);

$arrayResp = array(
    'RESPONSE'  => $blResp,
    'MESSAGE'   => $strMessage,
    'DATA'      => $arrayData
);

echo json_encode($arrayResp);

?>