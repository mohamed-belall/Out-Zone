function toggleMenu() {
  var menu = document.getElementById('menu');
  var menuToggle = document.querySelector('.menu-toggle');

  // Toggle the 'show' class on the menu and 'active' class on the toggle button
  menu.classList.toggle('show');
  menuToggle.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (event) {
      if (window.innerWidth <= 768) { // Check if it's mobile view
        const dropdownContent = this.querySelector('.dropdown-content');
        const isVisible = dropdownContent.style.display === 'block';

        // Hide all dropdown contents
        document.querySelectorAll('.dropdown-content').forEach(content => {
          content.style.display = 'none';
        });

        // Toggle the clicked dropdown
        dropdownContent.style.display = isVisible ? 'none' : 'block';

        // Prevent event from closing dropdown if clicking inside
        event.stopPropagation();
      }
    });
  });

  // Hide dropdowns when clicking outside except when clicking inside the slider
  document.addEventListener('click', function (event) {
    if (window.innerWidth <= 768) { // Only for mobile view
      // Ensure it doesn't close when clicking inside the slider
      if (!event.target.closest('.dropdown') && !event.target.closest('.slider')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
          content.style.display = 'none';
        });
      }
    }
  });

  // Disable hover effect on mobile
  function disableHoverOnMobile() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.add('no-hover');
      });
    } else {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('no-hover');
      });
    }
  }

  disableHoverOnMobile();
  window.addEventListener('resize', disableHoverOnMobile);
});

function scrollToSection(sectionId) {
  var element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
