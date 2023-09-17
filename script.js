const imageContainer = document.getElementById('image-container');
const images = imageContainer.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = '0.7';
    });

    image.addEventListener('mouseout', () => {
        image.style.opacity = '1';
    });
});