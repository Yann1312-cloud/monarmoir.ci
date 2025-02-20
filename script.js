// JavaScript pour le carousel (exemple basique)
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

let index = 0;

function showNextItem() {
    items[index].style.display = 'none';
    index = (index + 1) % items.length;
    items[index].style.display = 'flex';
}

setInterval(showNextItem, 3000); // Change d'élément toutes les 3 secondes

// Initialisation
items.forEach((item, i) => {
    if (i !== 0) item.style.display = 'none';
});
