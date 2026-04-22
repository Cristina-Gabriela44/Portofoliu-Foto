<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "galerie_foto";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}

$nume = $_POST['nume'];
$poza = $_POST['poza'];
$nota = $_POST['nota'];

$sql = "INSERT INTO recenzii (nume_utilizator, poza_evaluata, nota) VALUES ('$nume', '$poza', '$nota')";

if ($conn->query($sql) === TRUE) {
    echo "Succes";
} else {
    echo "Eroare: " . $conn->error;
}

$conn->close();
?>