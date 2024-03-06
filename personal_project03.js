document.addEventListener('DOMContentLoaded', function () {
    const container03 = document.querySelector('.tbt-menu-container');
    const prev03 = document.querySelector('.prev03');
    const next03 = document.querySelector('.next03');
    let currentIndex03 = 0;
     
    const itemWidth03 = 1030 / 4; 

    prev03.addEventListener('click', function () {
        if (currentIndex03 > 0) {
            currentIndex03--;
            moving03();
        }
    });

    next03.addEventListener('click', function () {
        if (currentIndex03 < 4) { 
            currentIndex03++;
            moving03();
        }
    });

    function moving03() {
        const slide03 = -currentIndex03 * itemWidth03 + 'px';
        container03.style.transform = 'translateX(' + slide03 + ')';
    }
});