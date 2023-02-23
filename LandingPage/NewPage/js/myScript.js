const bgColor = "white";
const boxShadow = "0px 5px 6px -6px #999999";
const pinkColor = "#ea3a60";

function onToggleActive(id) {
  const arrayIds = ["buttonLeft", "buttonRight"];
  const callback = (el) => el === id;

  const [activeIds, deActiveIds] = arrayIds.reduce(
    (result, el) => {
      (callback(el) ? result[0] : result[1]).push(el);
      return result;
    },
    [[], []]
  );

  if (!activeIds.length) return;
  document.getElementById(activeIds[0]).style.background = bgColor;
  document.getElementById(activeIds[0]).style.boxShadow = boxShadow;

  deActiveIds.forEach((el) => {
    if (!document.getElementById(el)) return;
    document.getElementById(el).style.background = "none";
    document.getElementById(el).style.boxShadow = "none";
  });
}

function hoverGroup() {
  document.getElementById("hover").style.display = "block";
}
/***
 * JS Scopes
 * JS Destructuring
 * Spread operator
 * Rest operator
 * Pass by value + Pass by reference
 */

const carousel = document.querySelector(".blog__containerContent");
const slider = document.querySelector(".blog__containerContentSlider");

const next = document.querySelector(".blog__containerContentButton--next");
const prev = document.querySelector(".blog__containerContentButton--prev");
let direction;

next.addEventListener("click", function () {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translateX(-33%)";
});

prev.addEventListener("click", function () {
  if (direction == -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translateX(33%)";
});

slider.addEventListener(
  "transitionend",
  function () {
    if (direction == 1) {
      slider.prepend(slider.lastElementChild);
    } else {
      slider.appendChild(slider.firstElementChild);
    }
    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setInterval(function displaySlides() {
      slider.style.transition = "all 0.5s  ease-in";
    });
    // setInterval(() => {
    //   slider.style.transition = "all 0.5s  ease-in";
    // });
  },
  false
);
