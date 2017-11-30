<?php

	// the header
	$msg = "Información de Contacto\n\n";

	// the name
	$msg .= "Nombre: ".$_POST['name']."\n";

	// the email
	$msg .= "Email: ".$_POST['email']."\n";

	// the phone number
	$msg .= "Teléfono: ".$_POST['phone']."\n";

	// the message
	$msg .= "Mensaje: ".$_POST['content']."\n";

	// use wordwrap() if lines are longer than 70 characters
	//$msg = wordwrap($msg,70);

	// send email
	if (mail($_POST['email'], " Nuevo mensaje de contacto", $msg))
	 	echo "OK";

	 else
	 	echo "EMAIL no enviado";

?>