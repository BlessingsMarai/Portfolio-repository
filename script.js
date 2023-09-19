// Add hover event to all links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'blue';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = 'black';
  });
});