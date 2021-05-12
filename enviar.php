<?php
    $destinatario = 'nicoroagazul@gmail.com';
    $usuario = $_POST['usuario'];
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $contenido = "Usuario: " . $usuario . "\nNombre: ". $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono;
    mail($destinatario,"Contacto",$contenido);
    header("Location:index.html");

?>