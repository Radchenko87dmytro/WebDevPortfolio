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
const headerItemsMin = document.querySelector("#headerItemsMin");
const headerContainer = document.querySelector("#headerCont");
//header_cont;

hamburgerBtn.addEventListener("click", () => {
  //popover.style.display = "block";
  headerItemsMin.classList.toggle("active");
  //headerItems.classList.toggle("header_items");
  //headerItemsMin.style.display = "flex";
  //headerItems.style.display = "flex";
  //headerItemsMin.style.display = "flex";

  //style.display = "flex";
  //headerContainer.style.display = "flex";
  //headerContainer.style.justifyContent = "flex-end";
});

// headerItemsMin.addEventListener("click", () => {
//   headerItemsMin.style.display = "none";
// });

// overlay.addEventListener("click", () => {
//   overlay.classList.toggle("header_items_min");
//   headerItemsMin.style.display = "none";
// });

// popover.addEventListener("click", () => {
//   popover.style.display = "none";
// });
