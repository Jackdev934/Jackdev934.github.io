document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector("#imgModal .close");

  // Open modal when any artwork is clicked
  document.querySelectorAll(".art-img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // Close modal when clicking the X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const uploadModal = document.getElementById("uploadModal");
  const uploadBtn = document.querySelector(".upload-btn");
  const uploadClose = uploadModal.querySelector(".close");

  // Open modal when button is clicked
  uploadBtn.addEventListener("click", () => {
    uploadModal.style.display = "block";
  });

  // Close modal on X click
  uploadClose.addEventListener("click", () => {
    uploadModal.style.display = "none";
  });

  // Close modal when clicking outside the box
  window.addEventListener("click", (e) => {
    if (e.target === uploadModal) {
      uploadModal.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const uploadModal = document.getElementById("uploadModal");
  const uploadBtn = document.querySelector(".upload-btn");
  const uploadClose = uploadModal.querySelector(".close");

  // Open modal when button is clicked
  uploadBtn.addEventListener("click", () => {
    uploadModal.style.display = "block";
  });

  // Close modal on X click
  uploadClose.addEventListener("click", () => {
    uploadModal.style.display = "none";
  });

  // Close modal when clicking outside the box
  window.addEventListener("click", (e) => {
    if (e.target === uploadModal) {
      uploadModal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const uploadModal = document.getElementById("uploadModal");
  const uploadBtn = document.querySelector(".upload-btn");
  const uploadClose = uploadModal.querySelector(".close");

  // Open modal when button is clicked
  uploadBtn.addEventListener("click", () => {
    uploadModal.style.display = "block";
  });

  // Close modal on X click
  uploadClose.addEventListener("click", () => {
    uploadModal.style.display = "none";
  });

  // Close modal when clicking outside the box
  window.addEventListener("click", (e) => {
    if (e.target === uploadModal) {
      uploadModal.style.display = "none";
    }
  });
});
