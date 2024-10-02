// Function to update the ans-box with the word and sentence
function showAnswer(word, sentence) {
    const ansBox = document.getElementById('ans-box');
    ansBox.innerHTML = `${word}: ${sentence}`;
}

const images = document.querySelectorAll('.array-pictures img');


images.forEach((img) => {
    img.addEventListener('click', () => {

        const word = img.getAttribute('data-word');
        const sentence = img.getAttribute('data-sentence');
        
        showAnswer(word, sentence);
    });
});
