let input = document.querySelector(".donate-range__input");
if (window.innerWidth <= 1200 && window.innerWidth >= 980) {
  input.setAttribute("max", 7);
} else if (window.innerWidth <= 700) {
  input.setAttribute("max", 5);
} else {
  input.setAttribute("max", 8);
}
window.addEventListener("resize", function () {
  if (window.innerWidth <= 1200) {
    input.setAttribute("max", 7);
  } else if (window.innerWidth <= 700) {
    input.setAttribute("max", 5);
  } else {
    input.setAttribute("max", 8);
  }
});
