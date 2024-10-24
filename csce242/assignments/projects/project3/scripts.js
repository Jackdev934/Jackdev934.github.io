let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;

    slideIndex += n;

    // Loop to the first or last slide
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Move the slide container
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}
document.querySelector('.location-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    
    // Simulate API call to fetch music shops based on location (replace this with actual API call)
    const musicShops = [
        {
            name: "Guitar Haven",
            address: "123 Main St, New York, NY",
            website: "https://guitarhaven.com"
        },
        {
            name: "Vinyl Vibes",
            address: "456 Broadway, New York, NY",
            website: "https://vinylvibes.com"
        },
        {
            name: "Music World",
            address: "789 Music Ave, New York, NY",
            website: "https://musicworld.com"
        }
    ];

    // Clear existing results
    const shopList = document.querySelector('.shop-list');
    shopList.innerHTML = '';

    // Dynamically create and display shop listings
    musicShops.forEach(shop => {
        const shopElement = document.createElement('div');
        shopElement.classList.add('shop-item');
        shopElement.innerHTML = `
            <h4><a href="${shop.website}" target="_blank">${shop.name}</a></h4>
            <p>${shop.address}</p>
        `;
        shopList.appendChild(shopElement);
    });
});
