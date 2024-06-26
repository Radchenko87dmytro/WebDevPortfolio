// function adjustContentMargin() {
//   var header = document.getElementsById("header");
//   var section = document.getElementsById("section");
//   var headerHeight = header.offsetHeight;
//   section.style.marginTop = headerHeight + "px";
// }

// // Adjust margin on load
// document.onload = adjustContentMargin;

// // Adjust margin if window is resized
// document.onresize = adjustContentMargin;
// console.log("asvdfsfv");

const hamburgerBtn = document.querySelector("#hamburger");
const popover = document.querySelector("#popover");
const body = document.querySelector("body");
const headerItems = document.querySelector("#headerItems");

hamburgerBtn.addEventListener("click", () => {
  //popover.style.display = "block";
  headerItems.style.display = "flex";
});

popover.addEventListener("click", () => {
  popover.style.display = "none";
});
