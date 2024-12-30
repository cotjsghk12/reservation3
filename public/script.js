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
        fetch('/api/reserve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({classNum, name })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
            } else {
                alert('예약에 실패했습니다. 다시 시도해주세요.');
            }
        })
        .catch(error => {
            alert('예약에 실패했습니다. 다시 시도해주세요.');
        });
    } else {
        alert("모든 정보를 입력해주세요.");
    }
}


