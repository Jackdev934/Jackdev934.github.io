

// "Before" adoption pictures
const beforePics = {
  "Buddy": "images/dog1.jpeg",
  "Lucy": "images/dog2.jpeg",
  "Max": "images/dog3.jpeg",
  "Rocko": "images/dog4.jpeg"
};

// "After" adoption pictures
const afterPics = {
  "Buddy": "images/dog1_after.jpeg",
  "Lucy": "images/dog2_after.jpeg",
  "Max": "images/dog3_after.jpeg",
  "Rocko": "images/dog4_after.jpeg"
};

// Load Gallery
const gallery = document.getElementById("gallery");

for (let name in beforePics) {
  // Create card
  const card = document.createElement("div");
  card.classList.add("dog-card");

  // Add image
  const img = document.createElement("img");
  img.src = beforePics[name];
  img.alt = name;

  // Add hover text
  const caption = document.createElement("span");
  caption.textContent = `${name} - Please Adopt!`;

  card.appendChild(img);
  card.appendChild(caption);
  gallery.appendChild(card);


  img.addEventListener("click", () => {
    document.getElementById("popup-title").textContent = `${name} - After Adoption`;
    document.getElementById("popup-img").src = afterPics[name];
    document.getElementById("popup").classList.remove("hidden");
  });
}

// Close Popup
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});
