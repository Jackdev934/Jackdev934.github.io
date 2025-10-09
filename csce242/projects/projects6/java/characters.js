// Modal Setup
const charModal = document.getElementById("charModal");
const charModalTitle = document.getElementById("char-modal-title");
const charModalText = document.getElementById("char-modal-text");
const charCloseBtn = charModal.querySelector(".close");
const charModalImg = document.getElementById("char-modal-img");

// Global variable to store character data
let charInfo = [];

// Fetch characters from JSON
const getChar = async () => {
  const url = "https://raw.githubusercontent.com/Jackdev934/Jackdev934.github.io/main/csce242/projects/projects6/java/json/characters.json";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log("Fetched character data:", data);

    if (Array.isArray(data)) {
      charInfo = data; // store globally
      return data;
    } else if (data.characters && Array.isArray(data.characters)) {
      charInfo = data.characters; // store globally
      return data.characters;
    } else {
      console.error("Unexpected JSON format:", data);
      charInfo = [];
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch character data:", error);
    charInfo = [];
    return [];
  }
};

// Display character cards
const showChar = async () => {
  const characters = await getChar();
  const charListDiv = document.getElementById("char-list");
  if (!charListDiv) {
    console.error("Element with ID 'char-list' not found!");
    return;
  }

  characters.forEach((character) => {
    const section = document.createElement("section");
    section.classList.add("character");

    // Heading
    const h3 = document.createElement("h3");
    h3.innerHTML = character.name;
    section.append(h3);

    // Image
    const img = document.createElement("img");
    img.src =
      character.imgs && character.imgs.length > 0
        ? character.imgs[0]
        : "https://via.placeholder.com/200x200";
    img.alt = character.name;
    section.append(img);

    // Description
    const p = document.createElement("p");
    p.innerHTML = character.text || "No description available.";
    section.append(p);

    // Location
    const location = document.createElement("p");
    location.innerHTML = "Location: " + (character.location || "Unknown");
    section.append(location);

    // Open modal on image click
    img.addEventListener("click", () => openCharModal(character.name));

    charListDiv.append(section);
  });
};

// Modal Functions
function openCharModal(name) {
  // Find character info from global data
  const info = charInfo.find((c) => c.name === name);

  charModalTitle.textContent = name;
  charModalText.textContent = info ? info.text : "Description coming soon.";

  const imgSrc =
    info && info.imgs && info.imgs.length > 0
      ? info.imgs[0]
      : "https://via.placeholder.com/600x300?text=" + encodeURIComponent(name);

  charModalImg.src = imgSrc;
  charModal.style.display = "block";
}

// Close modal
charCloseBtn.onclick = () => (charModal.style.display = "none");
window.onclick = (e) => {
  if (e.target === charModal) charModal.style.display = "none";
};

// Initialize characters
showChar();