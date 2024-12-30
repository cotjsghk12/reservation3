document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("reserveButton").addEventListener("click", function() {
        document.getElementById("reserveForm").style.display = "block";
    });
});

function submitReservation() {
    var grade = document.getElementById("grade").value;
    var classNum = document.getElementById("class").value;
    var number = document.getElementById("number").value;
    var name = document.getElementById("name").value;

    if (grade && classNum && number && name) {
        alert("예약이 완료되었습니다.");
        // 실제로 서버에 데이터를 전송하는 코드 필요
    } else {
        alert("모든 정보를 입력해주세요.");
    }
}
