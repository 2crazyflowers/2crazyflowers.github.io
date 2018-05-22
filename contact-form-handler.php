<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $emailFrom = $_POST['email'];
  $message = $_POST['message'];

  $email_subject = 'New Portfolio Visitor';
  $email_body = 'You have received an email from '.$name.'.r\n'
  'Message from visitor: '.$message;

  $mailTo = bracewell.sara@gmail.com;

  $headers = 'From: '.$emailFrom;
  
  mail($mailTo, $email_subject, $email_body, $headers);

  header('Location: contact.html?mailsent');
}

