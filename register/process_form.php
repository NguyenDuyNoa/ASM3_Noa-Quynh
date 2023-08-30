<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_registration";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $studentId = $_POST["student-id"];
    $fullName = $_POST["full-name"];
    $email = $_POST["email"];
    $gender = $_POST["gender"];
    $hobby = $_POST["hobby"];
    $country = $_POST["country"];
    $note = $_POST["note"];

    $sql = "INSERT INTO registration (student_id, full_name, email, gender, hobby, country, note)
            VALUES ('$studentId', '$fullName', '$email', '$gender', '$hobby', '$country', '$note')";

    if ($conn->query($sql) === TRUE) {
        header('Location:registered.html');
    } else {
        echo "Lỗi: " . $conn->error;
    }
}

$conn->close();
?>
