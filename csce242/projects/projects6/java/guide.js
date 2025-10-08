document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const closeBtn = modal.querySelector(".close");
  const videoFrame = document.getElementById("videoFrame");

  // Open modal when clicking a guide card
  document.querySelectorAll(".guide-card").forEach(card => {
    card.addEventListener("click", () => {
      const videoUrl = card.getAttribute("data-video");
      videoFrame.src = videoUrl + "?autoplay=1"; // autoplay on open
      modal.style.display = "block";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    videoFrame.src = ""; // stop video
  });

  // Close when clicking outside modal
  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  });
});
