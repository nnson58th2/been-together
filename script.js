document.addEventListener('DOMContentLoaded', function () {
    // Tạo dòng thời gian
    var innerDate = document.querySelector('.date').querySelector('span');
    var hours = document.querySelector('.hours');
    var mins = document.querySelector('.mins');
    var seconds = document.querySelector('.seconds');

    function showDate() {
        var first = new Date(2018, 0, 08);
        var now = new Date();
        var date = Math.floor((now - first) / 86400000 + 1);
        innerDate.innerHTML = date;
        // alert(date); 
        setTimeout(showDate, 1000);
    }

    function showTime() {
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();

        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        hours.innerHTML = h;
        mins.innerHTML = m;
        seconds.innerHTML = s;
        setTimeout(showTime, 1000);
    }
    showDate();
    showTime();
});