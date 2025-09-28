document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navRow = document.getElementById("navRow");

  hamburger.addEventListener("click", () => {
    navRow.classList.toggle("show");
  });
});
