document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".sidenav .nav-link");
  const contentSections = document.querySelectorAll(".content-section");

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
    });
  });
});

