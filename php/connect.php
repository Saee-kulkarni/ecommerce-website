<?php
 $name=$_POST['name'];
 $email=$_POST['email'];
 $password=$_POST['password'];
 $DOB=$_POST['DOB'];
 $country=$_POST['country'];
 $state=$_POST['state'];
 $Address=$_POST['Address'];
 $Gender=$_POST['Gender'];
 
 //database connection
 $conn =new mysqli('localhost','root','','project');
 if($conn->connect_error){
     die('Connection Failed:'.$conn->connect_error);
 }else{
     $stmt = $conn->prepare("insert into login(name,email,password,DOB,country,stste,address,Gender)
         values(?,?,?,?,?,?,?,?)");
     $stmt->bind_param("sssissss",$name,$email,$password,$DOB,$country,$stste,$address,$Gender);
     $stmt->execute();
     echo "registration is successfull.....";
     $stmt->close();
     $conn->close();
 }