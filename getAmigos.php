<?php

    include("config.php");

    $blResp = false;

    $strMessage = "";

    $q = (trim($_REQUEST['usuario']));

    $con = mysqli_connect($datos[0],$datos[1],$datos[2],$datos[3]);
    $blResp = true;
    
    if (!$con) {
        $blResp = false;
        die('Could not connect: ' . mysqli_error($con));
        $strMesage = "No fue posible conectarse: ".mysqli_error($con);
    }

    mysqli_select_db($con,"friender");


//$sql="SELECT * FROM user WHERE id = '".$q."'";
$sql="select u.login,u.nombre, f.nombre imagen from usuarios u, gustos g, fotos f
where g.id_usuarios_gustos = u.login
and (g.musica = (select a.musica from gustos a where id_usuarios_gustos='".$q."') 
or g.deporte = (select b.deporte from gustos b where id_usuarios_gustos='".$q."')
or g.comida = (select c.comida from gustos c where id_usuarios_gustos='".$q."')
or g.pelicula = (select d.pelicula from gustos d where id_usuarios_gustos='".$q."'))
and f.usuario = g.id_usuarios_gustos
and u.login <> '".$q."'";
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

?>