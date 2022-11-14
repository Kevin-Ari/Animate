<?php
include 'cn.php';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$motivo = $_POST['motivo'];
$texto = $_POST['texto'];


//CONSULTA PARA INSERTAR

$insertar = 'INSERT INTO usuario(nombre,email,telefono,motivo,texto) values('$nombre','$email',$telefono,'$motivo','$texto');

//EJECUTAR CONSULTA
$resultado = mysql_query($conexion, $insertar); 
if (!$resultado) {
    echo 'error al registrarse';
}else {
    echo 'Usuario registrado exitosamente';
}
mysql_close($conexion);