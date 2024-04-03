const images = document.querySelectorAll('img');
const firstItem = document.querySelector('.first-item');

function handleMouseEnter(event) {
    const image = event.target;
    const altText = image.getAttribute('alt');
    firstItem.textContent = altText;
    firstItem.style.display = 'block';
}

function handleMouseLeave(event) {
    firstItem.style.display = 'none';
}

images.forEach(function(image) {
    image.addEventListener('mouseenter', handleMouseEnter);
    image.addEventListener('mouseleave', handleMouseLeave);
});