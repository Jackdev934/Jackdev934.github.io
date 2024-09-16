let count = 0;

function incrementCount() {
    count += 1;
    document.getElementById('count').innerText = count;
}

function refreshImage() {
    document.getElementById('randomImage').src = 'https://picsum.photos/200?' + new Date().getTime();
}

let isDragging = false;

function initDraggableSquare() {
    const movingSquare = document.getElementById('movingSquare');
    const largerSquare = document.getElementById('largerSquare');
    const container = document.querySelector('.slider-container');
    const containerWidth = container.clientWidth;
    const squareWidth = movingSquare.offsetWidth;

    movingSquare.addEventListener('mousedown', function(event) {
        isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(event) {
        if (isDragging) {
            const rect = container.getBoundingClientRect();
            let x = event.clientX - rect.left; // Calculate x position within container

            // Clamp x value within the bounds of the container
            x = Math.max(0, Math.min(x, containerWidth - squareWidth));

            movingSquare.style.left = `${x}px`;

            // Update the larger square's width proportionally
            const proportion = x / (containerWidth - squareWidth);
            largerSquare.style.width = `${proportion * 100}%`;
        }
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}

// Initialize draggable functionality
initDraggableSquare();
