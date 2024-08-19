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

  // Hide dropdowns when clicking outside
  document.addEventListener('click', function () {
    if (window.innerWidth <= 768) { // Only for mobile view
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none';
      });
    }
  });
});