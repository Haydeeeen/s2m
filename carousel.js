document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = ['bouffon1.jpg', 'bouffon2.jpg', 'bouffon3.jpg', 'bouffon4.jpg'];
    const imageElement = document.querySelector('#carousel-image');

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imageElement.src = images[currentIndex];
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    });
});
