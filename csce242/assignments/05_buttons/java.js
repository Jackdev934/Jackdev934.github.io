// Hidden Text to Shown 
document.getElementById("sunny-box").onclick = () => {
  const lyrics = document.getElementById("lyrics");
  if (lyrics) lyrics.classList.remove("hidden");
};

// Color picker
const colorInput = document.getElementById("favcolor");
const colorText  = document.getElementById("color-text");
const colorCode  = document.getElementById("color-code");

const applyColor = () => {
  if (!colorInput) return;
  const value = colorInput.value; 
  if (colorText) colorText.style.color = value;
  if (colorCode) colorCode.textContent = value;
};

// update while dragging or on change
if (colorInput) {
  colorInput.oninput = applyColor;
  colorInput.onchange = applyColor;
  // initialize readout to the input's starting value
  applyColor();
}

// Rainy to Sunny on image click
const imgRainy = document.getElementById("img-rainy");
const imgSunny = document.getElementById("img-sunny");

if (imgRainy && imgSunny) {
  imgRainy.onclick = () => {
    imgRainy.classList.add("hidden");
    imgSunny.classList.remove("hidden");
  };
}
