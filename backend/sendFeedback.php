<?php
 
//  if ($_SERVER['REQUEST_METHOD'] != 'POST') {
//      $response = array(
//          'error' => 'Nothing to POST!'
//      );
// } else if (!isset($_POST['ffname']) && !isset($_POST['flname'])) {
//     $response = array(
//         'error' => 'Not required data!'
//     );
// } else {

    $conn = mysqli_connect('localhost', 'root', '', 'kakepuoh');

    if(!$conn){
        echo 'Error: ' . mysqli_connect_error();
    }
    
    $fname = $_POST['ffname'];
    $sname = $_POST['flname'];
    $pnumber = $_POST['fpnumber'];
    $email = $_POST['femail'];
    $fbox = $_POST['fbox'];
    
    
    $sql = "INSERT INTO palaute(enimi, snimi, pnumero, sposti, pbox) 
            VALUES ('$fname', '$sname', '$pnumber', '$email', '$fbox')";
    
    mysqli_query($conn, $sql);
    $response = array(
        'success' => 'Feedback sent'
    );
//  }

echo json_encode($response);
