const heading = document.querySelector('h1');

heading.addEventListener('mouseover', () => {
    heading.style.color = 'blue'; // Change the color to blue on hover
});

heading.addEventListener('mouseout', () => {
    heading.style.color = 'black'; // Change back to black when the mouse leaves
});