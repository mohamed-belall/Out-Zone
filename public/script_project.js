document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      projects.forEach((project) => {
        if (
          filter === "all" ||
          project.getAttribute("data-category") === filter
        ) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // Initial display
  document.querySelector(".filter-btn[data-filter='all']").click();
});

// document.addEventListener("DOMContentLoaded", function () {
//   const filterButtons = document.querySelectorAll(".filter-btn");
//   const projects = document.querySelectorAll(".project");

//   filterButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       filterButtons.forEach((btn) => btn.classList.remove("active"));
//       button.classList.add("active");

//       const filter = button.getAttribute("data-filter");

//       projects.forEach((project) => {
//         if (
//           filter === "all" ||
//           project.getAttribute("data-category") === filter
//         ) {
//           project.classList.remove("hide");
//           project.classList.add("show");
//         } else {
//           project.classList.remove("show");
//           project.classList.add("hide");
//         }
//       });
//     });
//   });

//   // Initial display
//   document.querySelector(".filter-btn[data-filter='all']").click();
// });
