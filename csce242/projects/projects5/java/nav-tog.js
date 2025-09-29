

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navRow = document.getElementById("navRow");

  if (hamburger && navRow) {
    hamburger.addEventListener("click", () => {
      navRow.classList.toggle("show");
    });
  }
});
