<?php
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $from = "From: ".$visitor_email;
  $to = "mazemi@syr.edu";
  $subject = 'Hello';
  $body = "From: $name\n E-Mail: $visitor_email\n Message:\n $message";

  if ($_POST [ 'submit']){
    if(mail($to, $subject, $body, $from)){
      echo '<p>Your email has been sent!</p>'
    } else {
      echo '<p> Sorry this did not send, go back and try again!</p>'
    }
  }
  header("Location: mergim.html")
}
 ?>
