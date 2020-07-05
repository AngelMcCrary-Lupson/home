<?php
if(isset($_POST['email'])) {
  $name = $_POST['name'];
  $email_address = $_POST['email'];
  $message = $_POST['message'];

  #Filter user input
  // function filter_email_header($form_field) {
  //   return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
  // }

  // $email_address  = filter_email_header($email_address);
  $email_subject = "New Form submission";
  $email_body = "New message from the user $name. \n"."Email: $email_address \n"."Message: \n $message";
  #Send email
  $headers = "From: $email_address";
  $sent = mail('impressionphotoanglz@hotmail.com', $email_subject, $email_body, $headers);
  header('Access-Control-Allow-Origin: *');
  header("Content-type: text/plain");
  echo "Your message has been sent! Thank you, I will try to get back to you shortly.";
} else {
  echo "Looks like something went wrong, please try again.";
}
  #Receive user input


#Thank user or notify them of a problem
?>
