function reservation() {
    const res = document.getElementById("reserveForm");

    if (res.style.display === 'none') {
        res.style.display = 'block';
    }

    else {
        res.style.display = 'none';
    }
}


function submitReservation() {
    var classNum = document.getElementById("classNum").value;
    var name = document.getElementById("name").value;

    if (classNum && name) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "reserve.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert("예약이 완료되었습니다.");
                } else {
                    alert("예약에 실패했습니다. 다시 시도해주세요.");
                }
            }
        };

        var data =  "&classNum=" + encodeURIComponent(classNum) + "&name=" + encodeURIComponent(name);
        xhr.send(data);
    } else {
        alert("모든 정보를 입력해주세요.");
    }
}

