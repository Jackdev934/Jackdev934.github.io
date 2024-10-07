class Bird {
    constructor(name, size, lifespan, food, habitat, local, fact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.local = local;
        this.fact = fact;
        this.image = image;
    }

    static openModal(birdId) {
        const bird = Bird.birds[birdId]; 

        // Populate modal with bird details
        document.getElementById('modalHeader').innerText = bird.name;
        document.getElementById('birdSize').innerText = bird.size;
        document.getElementById('birdLifespan').innerText = bird.lifespan;
        document.getElementById('birdFood').innerText = bird.food;
        document.getElementById('birdHabitat').innerText = bird.habitat;
        document.getElementById('birdLocal').innerText = bird.local;
        document.getElementById('birdFact').innerText = bird.fact;
        document.getElementById('birdImage').src = "images/" + bird.image; 

        // Display the modal
        document.getElementById('myModal').style.display = 'flex';
    }

    // close modal when click out 
    static closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }
}

// bird class with data 
Bird.birds = {
    hummingbird: new Bird(
        'Hummingbird', 
        '3-5 inches', 
        '3-5 years', 
        'Nectar, small insects', 
        'Woodlands, gardens',
        'Ecuador', 
        'Their wings can beat up to 80 times per second.', 
        'hummingbird.jpg'
    ),
    blueJay: new Bird(
        'Blue Jay', 
        '9-12 inches', 
        '7 years', 
        'Nuts, seeds, insects', 
        'Woodlands, suburban areas', 
        'Northern America (Ohio)',
        'They can mimic the calls of hawks.', 
        'blue-jay.jpg'
    ),
    cardinal: new Bird(
        'Cardinal', 
        '8-9 inches', 
        '3 years', 
        'Seeds, fruits, insects', 
        'Woodlands, gardens', 
        'Eastern North America',
        'They are monogamous and mate for life.', 
        'cardinal.jpg'
    ),
    robin: new Bird(
        'Robin', 
        '9-11 inches', 
        '2 years', 
        'Insects, fruits', 
        'Woodlands, parks',
        'United States',
        'Robins are one of the first birds to sing in the morning.', 
        'robin.jpg'
    )
};

//close modal when you click out 
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        Bird.closeModal();
    }
};
