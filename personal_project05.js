document.addEventListener('DOMContentLoaded', function () {
    const container05 = document.querySelector('.sbt-menu-container');
    const prev05 = document.querySelector('.prev05');
    const next05 = document.querySelector('.next05');
    let currentIndex05 = 0;
     
    const itemWidth05 = 1350 / 4; 

    prev05.addEventListener('click', function () {
        if (currentIndex05 > 0) {
            currentIndex05--;
            moving05();
        }
    });

    next05.addEventListener('click', function () {
        if (currentIndex05 < 4) { 
            currentIndex05++;
            moving05();
        }
    });

    function moving05() {
        const slide05 = -currentIndex05 * itemWidth05 + 'px';
        container05.style.transform = 'translateX(' + slide05 + ')';
    }
});