document.addEventListener('DOMContentLoaded', function () {
    // Tạo dòng thời gian
    var innerDate = document.querySelector('.date').querySelector('span');
    var hours = document.querySelector('.hours');
    var mins = document.querySelector('.mins');
    var seconds = document.querySelector('.seconds');

    function showDate() {
        var first = new Date(2018, 0, 08);
        var now = new Date();
        var date = Math.floor((now - first) / 86400000);
        innerDate.innerHTML = date;
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

    // Tạo trái tim rơi
  function createRandomHeart() {
    var top = Math.floor(Math.random() * 100);
    var left = Math.floor(Math.random() * screen.width);
    var opacity = Math.random();
    var body = document.body;
    var heart = document.createElement('div');

    heart.classList.add('heart-drop');
    body.appendChild(heart);
    heart.style.top = top + 'px';
    heart.style.left = left + 'px';
    heart.style.opacity = opacity;
    setTimeout(runHeart, 10);
    function runHeart() {
        if (top > window.innerHeight) {
            heart.remove();
        } else {
            top += 1;
            heart.style.top = top + 'px';
      }
      setTimeout(runHeart, 10);
    }
    setTimeout(createRandomHeart, 400);
  }
  setTimeout(createRandomHeart, 1000);
});