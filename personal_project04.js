document.addEventListener('DOMContentLoaded', function () {
    const container04 = document.querySelector('.fbt-menu-container');
    const prev04 = document.querySelector('.prev04');
    const next04 = document.querySelector('.next04');
    let currentIndex04 = 0;
     
    const itemWidth04 = 1000 / 4; 

    prev04.addEventListener('click', function () {
        if (currentIndex04 > 0) {
            currentIndex04--;
            moving04();
        }
    });

    next04.addEventListener('click', function () {
        if (currentIndex04 < 4) { 
            currentIndex04++;
            moving04();
        }
    });

    function moving04() {
        const slide04 = -currentIndex04 * itemWidth04 + 'px';
        container04.style.transform = 'translateX(' + slide04 + ')';
    }
});