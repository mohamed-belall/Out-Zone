document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner-3laa");
    let degree = 0;

    setInterval(() => {
        degree = (degree + 1) % 360;
        banner.style.background = `conic-gradient(from ${degree}deg at bottom left, #051c6d 0%, #000cb7 20%, 
            #005bd1 30%, #007a9b 40%, #4d056d 60%, #051c6d 71%)`;
    }, 20); // Change degree every 100ms (10 times per second)
});
