const hamburgerBtn = document.querySelector("#hamburger");
const headerItemsMin = document.querySelector("#headerItemsMin");

hamburgerBtn.addEventListener("click", () => {
  headerItemsMin.classList.toggle("active");
});
