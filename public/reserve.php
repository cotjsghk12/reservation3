<?php
// 환경 변수에서 데이터베이스 연결 정보 가져오기
$servername = "mongodb";
$username = "sunhwa";
$password = "Young0612!";
$dbname = "clusters0";

// MySQL 데이터베이스에 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("연결 실패: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 예약 정보 가져오기
    $class = $_POST['classNum'];
    $name = $_POST['name'];

    // SQL 삽입 쿼리
    $sql = "INSERT INTO reservations (classNum, name) VALUES ('$classNum', '$name')";

    // 쿼리 실행 및 결과 확인
    if ($conn->query($sql) === TRUE) {
        echo "새 기록이 성공적으로 추가되었습니다.";
    } else {
        echo "오류: " . $sql . "<br>" . $conn->error;
    }
}

// 연결 종료
$conn->close();
?>

