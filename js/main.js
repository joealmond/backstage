function myFunction() {
  document
    .querySelector("div.collapsible")
    .classList.toggle(".collapsible--expanded");
}

// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
    document.querySelector(".nav-button").style.top = "-25px";
    document.querySelector(".nav-button").style.transitionDelay = "-0.5s";
  } else {
    document.querySelector(".nav").style.top = "-60px";
    document.querySelector(".nav-button").style.top = "0";
    document.querySelector(".nav-button").style.transitionDelay = "0.5s";
  }
  prevScrollpos = currentScrollPos;
};
