document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".sidenav .nav-link");
  const contentSections = document.querySelectorAll(".content-section");
  const sidenavToggle = document.getElementById("sidenavToggle");
  const sidenav = document.querySelector(".sidenav");

  // Handle click on navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' class from all content sections and nav links
      contentSections.forEach((section) => section.classList.remove("active"));
      navLinks.forEach((nav) => nav.classList.remove("active"));

      // Add 'active' class to the clicked link and corresponding content section
      const contentId = this.getAttribute("data-content");
      document.getElementById(contentId).classList.add("active");
      this.classList.add("active");

      // Close sidenav after a link is clicked (for mobile view)
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          sidenav.classList.remove("open");
          sidenavToggle.innerHTML = '&#9664;'; // Left arrow
        }, 300); // Delay matches CSS transition duration
      }
    });
  });

  // Handle click on the sidenav toggle button
  sidenavToggle.addEventListener("click", function () {
    sidenav.classList.toggle("open");

    // Update the arrow direction based on the sidenav state
    if (sidenav.classList.contains("open")) {
      sidenavToggle.innerHTML = '&#9654;'; // Right arrow
    } else {
      sidenavToggle.innerHTML = '&#9664;'; // Left arrow
    }
  });

  // Initial setup: Set arrow direction based on the current state of the sidenav
  if (sidenav.classList.contains("open")) {
    sidenavToggle.innerHTML = '&#9654;'; // Right arrow
  } else {
    sidenavToggle.innerHTML = '&#9664;'; // Left arrow
  }
});
