<?php 
    
    require 'db_connection.php';

    $abc = json_decode(file_get_contents("php://input"));

    


    $name =  $abc->data->fullname;
    $email =  $abc->data->email;
    $subject =  $abc->data->subject;
    $messege =  $abc->data->messege;
    

    // if(isset($abc->data->name) && !empty($abc->data->name) && isset($abc->data->email) && !empty($abc->data->email) && isset($abc->data->subject) && !empty($abc->data->subject)&& isset($abc->data->messege) && !empty($abc->data->messege)){
    //     $name =  $abc->data->name;
    //     $email =  $abc->data->email;
    //     $subject =  $abc->data->subject;
    //     $messege =  $abc->data->messege;

        $sql = "INSERT INTO enquery VALUES(NULL, '$name', '$email','$subject','$messege')";
        
        $db->query($sql);

        if($db->affected_rows>0){
            echo json_encode(["msg"=>"Successfully Inserted"]) ;
        } else {
            echo json_encode(["msg"=>"Problem"]) ;
        }
   

    //echo json_encode(["msg"=>$name]) ;






?> 