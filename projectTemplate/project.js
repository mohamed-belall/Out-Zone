let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let indicators = document.querySelectorAll('.carousel-indicators button');

let lengthItems = items.length - 1;
let active = 0;

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    // Update dots
    document.querySelector('.slider .dots li.active').classList.remove('active');
    dots[active].classList.add('active');

    // Update carousel indicators
    document.querySelector('.carousel-indicators button.active').classList.remove('active');
    indicators[active].classList.add('active');

    resetInterval();
}

function resetInterval() {
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => next.click(), 3000);
}

next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

indicators.forEach((indicator, key) => {
    indicator.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

window.onresize = function(event) {
    reloadSlider();
};

let refreshInterval = setInterval(() => next.click(), 3000);
