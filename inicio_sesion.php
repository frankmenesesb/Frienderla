<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
session_start();
include("config.php");
$login = htmlspecialchars(trim($_POST['txtUsuario']));
$pass = sha1(md5(trim($_POST['txtContrasena'])));
$link = mysqli_connect($datos[0],$datos[1],$datos[2],$datos[3]);
$query = sprintf("SELECT nombre,apellidos,login,password,email FROM usuarios WHERE login='$login'and password='$pass'");
mysqli_select_db($link, $query);
$result = mysqli_query($link,$query);
if(mysqli_num_rows($result)){
$array = mysqli_fetch_array($result);
$_SESSION["login"] = $array["login"];
$_SESSION["nombre"] = $array["nombre"];
$_SESSION["apellidos"] = $array["apellidos"];
$_SESSION["email"] = $array["email"];
echo "exitoso";
//header("Location:/app/frm/frmMain.html");
echo" <javascript>
                location.href = '/app/frm/frmLogin.html';
               </javascript>";
exit();
} else {
echo "Login o password incorrectos.";
}

?>