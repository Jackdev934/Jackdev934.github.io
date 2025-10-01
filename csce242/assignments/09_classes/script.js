
document.addEventListener('DOMContentLoaded', () => {

  class ImageItem {
    constructor(src, title, author, framed) {
      this.src = src;
      this.title = title;
      this.author = author;
      this.framed = framed;
    }
  }

  class Modal {
    constructor(modalElement) {
      this.modal = modalElement;
      this.modalContent = this.modal.querySelector('.modal-content');

      // Build modal structure
      this.modalContent.innerHTML = `
        <button class="modal-close" aria-label="Close">&times;</button>
        <h3 class="modal-title"></h3>
        <img class="modal-image" alt="" />
        <p class="modal-author"></p>
        <p class="modal-framed"></p>
      `;

      this.modalCloseBtn = this.modalContent.querySelector('.modal-close');
      this.modalImage = this.modalContent.querySelector('.modal-image');
      this.modalTitle = this.modalContent.querySelector('.modal-title');
      this.modalAuthor = this.modalContent.querySelector('.modal-author');
      this.modalFramed = this.modalContent.querySelector('.modal-framed');

      // Close actions
      this.modalCloseBtn.addEventListener('click', () => this.close());
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
      this.modalContent.addEventListener('click', (e) => e.stopPropagation());
    }

    open(imageItem) {
      this.modalImage.src = imageItem.src;
      this.modalImage.alt = imageItem.title;
      this.modalTitle.textContent = imageItem.title;
      this.modalAuthor.textContent = `Author: ${imageItem.author}`;
      this.modalFramed.textContent = `Framed: ${imageItem.framed}`;
      this.modal.classList.add('open');
    }

    close() {
      this.modal.classList.remove('open');
      this.modalImage.src = '';
      this.modalTitle.textContent = '';
      this.modalAuthor.textContent = '';
      this.modalFramed.textContent = '';
    }
  }

  const imagesData = [
    new ImageItem("images/bee.jpeg", "The Bee", "Adobe Stock", "Yes"),
    new ImageItem("images/kitten.jpeg", "Kitten", "Unsplash", "No"),
    new ImageItem("images/flowers.jpeg", "Flowers and Butterflies", "All the Grows", "Yes"),
    new ImageItem("images/animal.jpeg", "Forest Animals", "American Forests", "No"),
  ];

  // Initialize modal
  const modal = new Modal(document.getElementById('Modal'));

  // event listeners to each card
  const cards = document.querySelectorAll('.con-grid .content-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      if (!img) return;
      const data = imagesData.find(item => img.src.includes(item.src));
      if (data) modal.open(data);
    });
  });
});
