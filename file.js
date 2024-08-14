document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollItems = document.querySelectorAll('.scroll-item');
    let currentIndex = 0;

    if (scrollContainer) {
        function autoScroll() {
            currentIndex = (currentIndex + 1) % scrollItems.length;
            scrollContainer.scrollTo({
                left: scrollItems[currentIndex].offsetLeft,
                behavior: 'smooth'
            });
        }

        setInterval(autoScroll, 5000); // Change every 5 seconds
    } else {
        console.error('Scroll container not found');
    }
});

