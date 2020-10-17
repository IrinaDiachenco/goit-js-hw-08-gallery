import images from './gallery-items.js';
console.log(images)
const galleryContainer = document.querySelector('.js-gallery');
const galleryItemMarkup = createGalleryItemsMarkup(images);
function createGalleryItemsMarkup(images) {
    return images.map(image => {
       return `
<li class="gallery__item">
        <a
            class="gallery__link"
            href="${image.original}"
        >
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
        </a>
    </li>`;
    
    }).join('');
};
    


galleryContainer.insertAdjacentHTML('afterbegin', galleryItemMarkup)