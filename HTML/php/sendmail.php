<?php
if($_POST)
{
	$to_email   	= "contato@colegiomaranata.com.br"; //Recipient email, Replace with own email here
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		
		$output = json_encode(array( //create JSON data
			'type'=>'error', 
			'text' => 'Desculpa, a requisição precisa ser Ajax POST'
		));
		die($output); //exit script outputting json data
    } 
	
	//Sanitize input data using PHP filter_var().
	$user_name		= filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$user_email		= filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
	$subject		= filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
	$message		= filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
	
	//additional php validation
	if(strlen($user_name)<2){ // If length is less than 4 it will output JSON error.
		$output = json_encode(array('type'=>'error', 'text' => '<p>Nome muito curto ou vazio!</p>'));
		die($output);
	}
	if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
		$output = json_encode(array('type'=>'error', 'text' => '<p>Por favor insira um endereço de email válido!</p>'));
		die($output);
	}
	if(strlen($subject)<3){ //check emtpy subject
		$output = json_encode(array('type'=>'error', 'text' => '<p>Assunto é necessário.</p>'));
		die($output);
	}
	if(strlen($message)<3){ //check emtpy message
		$output = json_encode(array('type'=>'error', 'text' => '<p>Mensagem muito curta, por favor insira uma mensagem.</p>'));
		die($output);
	}
	
	//email body
	$message_body = $message."\r\n\r\n-".$user_name."\r\nsubject : ".$subject."\r\nEmail : ".$user_email;
	
	//proceed with PHP email.
	$headers = 'From: '.$user_name.'' . "\r\n" .
	'Reply-To: '.$user_email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$send_mail = mail($to_email, $subject, $message_body, $headers);
	
	if(!$send_mail)
	{
		//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
		$output = json_encode(array('type'=>'error', 'text' => '<p>Não foi possível enviar o email, por favor cheque a configuração PHP do seu email.</p>'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => '<div class="alert alert-success" role="alert">
		Hi '.$user_name .',Obrigado pela sua mensagem, te responderemos em breve.</div>'));
		die($output);
	}
}
?>