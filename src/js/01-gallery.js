// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";



const gallery = document.querySelector('.gallery');

galleryItems.map( (element) => {
    let link = document.createElement('a');
    link.href = element.original;

    let image = document.createElement('img');
    image.src = element.preview;
    image.alt = element.description;

    link.appendChild(image);

    gallery.appendChild(link);
});

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });