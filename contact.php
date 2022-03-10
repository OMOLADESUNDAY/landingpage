<?php 
     $link=mysqli_connect("localhost","school_management_db","spyder","landing_pages");
     if (mysqli_connect_error()){
         die("error in connecting");
     }
    $fname=mysqli_real_escape_string($link,filter_input(INPUT_POST,"fname"));
    $lname=mysqli_real_escape_string($link,filter_input(INPUT_POST,"lname"));
    $email=mysqli_real_escape_string($link,filter_input(INPUT_POST,"email"));
    $message=mysqli_real_escape_string($link,filter_input(INPUT_POST,"message"));
    $error="";
    if ($fname==""){
        $error .= "you must enter your firstname <br>";
    }
    if ($lname==""){
        $error .= "you must enter your secondname <br>";
    }
    if ($email==""){
        $error .= "you must enter your thirdname <br>";
    }
    if ($message==""){
        $error .= "you must enter your registration number <br>";
    }
    if($error==""){
        $query="INSERT INTO `webdev` (`fname`,`lname`,`email`,`message`)  VALUES('$fname','$lname','$email','$message')";
        if(mysqli_query($link,$query)){
            echo "$fname"." "."$lname"."your message is sent";
        }
        else{
            echo "error: ".$query . "<br>" .mysqli_error($link);
        }
    }
    else{
        echo"<p> $error</p>\n";
    }
   if(mail('sundayomoladee11@gmail.com','message from webdev',$message,"From: " .$email)){
       echo "message sent succesfully";
   }
   else{
       header("Location: error.php" );
       
    //    echo"message was not sent";
   }

   
   













?>

