<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
        'message' => 'Thank you for your message. We will get back to you as early as possible.'
	);

    $name = @trim(stripslashes($_POST['name']));
$email = @trim(stripslashes($_POST['email']));
$topic = @trim(stripslashes($_POST['topic']));
$subject = @trim(stripslashes($_POST['subject']));
    $message = @trim(stripslashes($_POST['message'])); 

    $email_from = $email;
    $email_to = 'email@email.com';//replace with your email

$body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Topic: ' . $topic . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;

$success = @mail($email_to, $topic, $subject, $body, 'From: <' . $email_from . '>');

    echo json_encode($status);
    die;