document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.fist-body-menu-container');
    const prev02 = document.querySelector('.prev02');
    const next02 = document.querySelector('.next02');
    let currentIndex = 0;
     
    const itemWidth = 1040 / 4; 

    prev02.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            moving02();
        }
    });

    next02.addEventListener('click', function () {
        if (currentIndex < 4) { 
            currentIndex++;
            moving02();
        }
    });

    function moving02() {
        const slide02 = -currentIndex * itemWidth + 'px';
        container.style.transform = 'translateX(' + slide02 + ')';
    }
});