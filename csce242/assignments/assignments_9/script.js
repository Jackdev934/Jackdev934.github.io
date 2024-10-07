const drawButton = document.getElementById('drawButton');
const starBox = document.getElementById('starBox');
const errorMessage = document.getElementById('errorMessage');

drawButton.addEventListener('click', () => {
    const starCount = parseInt(document.getElementById('starCount').value);

    // Validate the input for a positive whole number
    if (isNaN(starCount) || starCount <= 0) {
        errorMessage.textContent = "Not a valid number. Please enter a positive whole number.";
        return;
    }

    // Clear any previous stars and error message
    errorMessage.textContent = '';
    starBox.innerHTML = '';

    // Loop to create and position stars
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.innerHTML = '&#9733;'; // Star symbol
        // Random positioning within the starBox
        star.style.left = `${Math.random() * (starBox.offsetWidth - 24)}px`;
        star.style.top = `${Math.random() * (starBox.offsetHeight - 24)}px`;
        starBox.appendChild(star); // Add star to the starBox
    }
});
