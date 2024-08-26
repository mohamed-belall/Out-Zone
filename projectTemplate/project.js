// Function definition remains the same as provided earlier
function initializeSlider({
  sliderContainerSelector,
  listSelector = ".list",
  itemSelector = ".item",
  nextButtonSelector = "#next",
  prevButtonSelector = "#prev",
  dotsSelector = ".dots li",
  indicatorsSelector = ".carousel-indicators button",
  interval = 3000,
}) {
  document
    .querySelectorAll(sliderContainerSelector)
    .forEach((sliderContainer) => {
      let slider = sliderContainer.querySelector(listSelector);
      let items = sliderContainer.querySelectorAll(itemSelector);
      let next = sliderContainer.querySelector(nextButtonSelector);
      let prev = sliderContainer.querySelector(prevButtonSelector);
      let dots = sliderContainer.querySelectorAll(dotsSelector);
      let indicators = document.querySelectorAll(indicatorsSelector); // Use global document query

      let lengthItems = items.length - 1;
      let active = 0;
      let refreshInterval;
      let direction = "right"; // Default direction

      function reloadSlider() {
        console.log("Reloading slider to index:", active);

        slider.style.left = -items[active].offsetLeft + "px";

        // Update dots
        let currentDot = sliderContainer.querySelector(
          `${dotsSelector}.active`
        );
        if (currentDot) {
          currentDot.classList.remove("active");
        }
        if (dots[active]) {
          dots[active].classList.add("active");
        }

        // Update carousel indicators
        let currentIndicator = document.querySelector(
          `${indicatorsSelector}.active`
        );
        if (currentIndicator) {
          currentIndicator.classList.remove("active");
        }
        if (indicators[active]) {
          indicators[active].classList.add("active");
        }

        resetInterval();
      }

      function resetInterval() {
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
          if (direction === "right") {
            next.click();
          } else {
            prev.click();
          }
        }, interval);
      }

      next.onclick = function () {
        direction = "right"; // Update direction to right
        active = active + 1 <= lengthItems ? active + 1 : 0;
        console.log("Next clicked, setting active to:", active);
        reloadSlider();
      };

      prev.onclick = function () {
        direction = "left"; // Update direction to left
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        console.log("Previous clicked, setting active to:", active);
        reloadSlider();
      };

      dots.forEach((li, key) => {
        li.addEventListener("click", () => {
          active = key;
          console.log("Dot clicked, setting active to:", active);
          reloadSlider();
        });
      });

      indicators.forEach((indicator, key) => {
        indicator.addEventListener("click", () => {
          active = key;
          console.log("Indicator clicked, setting active to:", active);
          reloadSlider();
        });
      });

      window.onresize = function () {
        reloadSlider();
      };

      // Initialize the slider with the default interval
      resetInterval();
    });
}

  // Call the function with different parameters
initializeSlider({
  sliderContainerSelector: ".slider1",
  nextButtonSelector: "#next1",
  prevButtonSelector: "#prev1",
  dotsSelector: ".dots1 li",
  indicatorsSelector: ".carousel-indicators1 button",
  interval: 5000,
});

initializeSlider({
  sliderContainerSelector: ".slider2",
  nextButtonSelector: "#next2",
  prevButtonSelector: "#prev2",
  dotsSelector: ".dots2 li",
  indicatorsSelector: ".carousel-indicators2 button",
  interval: 5000,
});

initializeSlider({
  sliderContainerSelector: ".slider3",
  nextButtonSelector: "#next3",
  prevButtonSelector: "#prev3",
  dotsSelector: ".dots3 li",
  indicatorsSelector: ".carousel-indicators3 button",
  interval: 5000,
});

initializeSlider({
  sliderContainerSelector: ".slider4",
  nextButtonSelector: "#next4",
  prevButtonSelector: "#prev4",
  dotsSelector: ".dots4 li",
  indicatorsSelector: ".carousel-indicators4 button",
  interval: 5000,
});

initializeSlider({
  sliderContainerSelector: ".slider5",
  nextButtonSelector: "#next5",
  prevButtonSelector: "#prev5",
  dotsSelector: ".dots5 li",
  indicatorsSelector: ".carousel-indicators5 button",
  interval: 5000,
});
initializeSlider({
  sliderContainerSelector: ".slider6",
  nextButtonSelector: "#next6",
  prevButtonSelector: "#prev6",
  dotsSelector: ".dots6 li",
  indicatorsSelector: ".carousel-indicators6 button",
  interval: 5000,
});
initializeSlider({
  sliderContainerSelector: ".slider7",
  nextButtonSelector: "#next7",
  prevButtonSelector: "#prev7",
  dotsSelector: ".dots7 li",
  indicatorsSelector: ".carousel-indicators7 button",
  interval: 5000,
});
initializeSlider({
  sliderContainerSelector: ".slider8",
  nextButtonSelector: "#next8",
  prevButtonSelector: "#prev8",
  dotsSelector: ".dots8 li",
  indicatorsSelector: ".carousel-indicators8 button",
  interval: 5000,
});
