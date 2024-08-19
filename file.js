function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuToggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('show');
    menuToggle.classList.toggle('active');

    if (
    menu.classList == 'show'
    ) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }

  }
