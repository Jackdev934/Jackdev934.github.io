
const JSON_URL = "https://raw.githubusercontent.com/Jackdev934/Jackdev934.github.io/refs/heads/main/csce242/projects/projects6/java/json/characters.json";

// Modal elements
const charModal = document.getElementById("charModal");
const charModalTitle = document.getElementById("char-modal-title");
const charModalText = document.getElementById("char-modal-text");
const charModalImg = document.getElementById("char-modal-img");
const charCloseBtn = charModal ? charModal.querySelector(".close") : null;

// Simple cache
let charInfo = [];

// Fetch
const getChar = async () => {
  try {
    const response = await fetch(JSON_URL);
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch characters JSON:", err);
    // Return empty array so code doesn't crash
    return [];
  }
};

// Renders list and wires buttons
const showChar = async () => {
  const characters = await getChar();
  const data = Array.isArray(characters) ? characters : (Array.isArray(characters.characters) ? characters.characters : []);
  charInfo = data; // cache for lookups

  // Build dynamic list 
  const charListDiv = document.getElementById("char-list");
  if (charListDiv) {
    charListDiv.innerHTML = ""; 
    data.forEach((character) => {
      const section = document.createElement("section");
      section.classList.add("character");

      const h3 = document.createElement("h3");
      h3.textContent = character.name || "Unnamed";
      section.appendChild(h3);

      const img = document.createElement("img");
      img.src = (character.imgs && character.imgs.length) ? character.imgs[0] : "https://via.placeholder.com/200x200";
      img.alt = character.name || "Character image";
      img.style.cursor = "pointer";
      img.addEventListener("click", () => openCharModal(character.name));
      section.appendChild(img);

      const p = document.createElement("p");
      p.innerHTML = character.text || "No description available.";
      section.appendChild(p);

      const loc = document.createElement("p");
      loc.textContent = "Location: " + (character.area || character.location || "Unknown");
      section.appendChild(loc);

      charListDiv.appendChild(section);
    });
  }

  const cards = document.querySelectorAll("article.char-card");
  cards.forEach((card) => {
    const btn = card.querySelector(".pill");
    if (!btn) return;

    // remove duplicate listeners defensively
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    // prefer data-char attribute if present
    const dataName = (card.dataset && card.dataset.char) ? card.dataset.char.trim() : null;
    const clickName = dataName || newBtn.textContent.trim();

    newBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openCharModal(clickName);
    });
  });
};

// Find character by name
function findCharacterByName(name) {
  if (!name || !Array.isArray(charInfo)) return null;
  // try exact match
  let found = charInfo.find(c => c.name === name);
  if (found) return found;
  // case-insensitive
  const lower = name.toLowerCase();
  found = charInfo.find(c => c.name && c.name.toLowerCase() === lower);
  if (found) return found;
  // startsWith fallback
  found = charInfo.find(c => c.name && c.name.toLowerCase().startsWith(lower));
  return found || null;
}

// Open modal and populate
function openCharModal(name) {
  const info = findCharacterByName(name);
  if (charModalTitle) charModalTitle.textContent = (info && info.name) || name || "Character";
  if (charModalText) charModalText.textContent = (info && info.text) || "Description coming soon.";
  const src = (info && info.imgs && info.imgs.length) ? info.imgs[0] : ("https://via.placeholder.com/600x300?text=" + encodeURIComponent(name || "Character"));
  if (charModalImg) charModalImg.src = src;
  if (charModal) charModal.style.display = "block";
}

// modal close handlers 
if (charCloseBtn) charCloseBtn.addEventListener("click", () => { if (charModal) charModal.style.display = "none"; });
window.addEventListener("click", (e) => { if (e.target === charModal && charModal) charModal.style.display = "none"; });
window.addEventListener("keydown", (e) => { if (e.key === "Escape" && charModal) charModal.style.display = "none"; });

// Run on load 
document.addEventListener("DOMContentLoaded", () => {
  showChar();
});
