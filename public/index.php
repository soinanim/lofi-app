<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>
<?php
$dbhost = '';
$port = '5432';
$dbname = '';
$dbuser = '';
$dbpass = '';
function guidv4($data = null)
{
    // Generate 16 bytes (128 bits) of random data or use the data passed into the function.
    $data = $data ?? random_bytes(16);
    assert(strlen($data) == 16); // Set version to 0100
    $data[6] = chr((ord($data[6]) & 0x0f) | 0x40); // Set bits 6-7 to 10
    $data[8] = chr((ord($data[8]) & 0x3f) | 0x80); // Output the 36 character UUID.
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}
$conn = pg_connect("host=$dbhost dbname=$dbname user=$dbuser password=$dbpass"); //     echo $row['id'] . ' ' . $row['email'] . '<br>'; // if (!$conn) { //   die("Ошибка подключения: " . pg_last_error()); // } else { // echo 'Успешное подключение к базе данных'; // } // // Выполнение запроса // $result = pg_query($conn, "SELECT * FROM lofi_users"); // if (!$result) { //     die('Ошибка запроса: ' . pg_last_error()); // } // // Обработка результатов запроса // while ($row = pg_fetch_assoc($result)) { // Закрытие соединения
// }
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_POST['password'])) {
        $password = $_POST['password'];
    }
    if (!empty(($email = $_POST['email']))) {
        $email = $_POST['email'];
    }
    if (!empty(($format = $_POST['format']))) {
        $format = $_POST['format'];
    }
    if ($format == 'register') {
        $UUID = guidv4();
        $isUser = pg_query(
            $conn,
            "SELECT * FROM lofi_users WHERE email = '" . $email . "'"
        );
        $numRows = pg_num_rows($isUser);
        if ($numRows <= 0) {
            $addUser = pg_query(
                $conn,
                "INSERT INTO lofi_users (uuid, email, password) VALUES ('$UUID', '$email', '$password');"
            );
            if ($addUser) {
                echo 'Добавлен новый пользователь';
            } else {
                echo 'Ошибка при добавлении пользователя';
            }
        } else {
            echo 'Пользователь с таким email уже существует';
        }
    } elseif ($format == 'login') {
        $isUser = pg_query(
            $conn,
            "SELECT * FROM lofi_users WHERE email = '" . $email . "'"
        );
        $numRows = pg_num_rows($isUser);
        if ($numRows > 0) {
            $userData = pg_fetch_assoc($isUser);
            if ($userData['password'] == $password) {
                $userData['token'] = guidv4();
                header('Content-Type: application/json');
                print_r(json_encode($userData));
            } else {
                echo 'Неверный пароль';
            }
        } else {
            echo 'Пользователь с таким email уже существует';
        }
    } elseif ($format == 'update-password') {
    } // while ($row = pg_fetch_assoc($result2)) { //     echo $row['id'] . ' ' . $row['email'] . '<br>'; // }
}
pg_close($conn);
 ?>
