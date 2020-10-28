import images from './gallery-items.js';
console.log(images)
const galleryItem = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.lightbox')
const galleryItemMarkup = createGalleryItemsMarkup(images);
const modalCloseBtn = document.querySelector('[data-action="close-lightbox"]');
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
 
galleryItem.insertAdjacentHTML('beforeend', galleryItemMarkup)

galleryItem.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    
    const lightboxImageEl = document.querySelector('.lightbox__image');
    
    lightboxEl.classList.add('is-open');
    lightboxImageEl.src = evt.target.dataset.source;
    lightboxImageEl.alt = evt.target.alt;
  
  modalCloseBtn.addEventListener('click', modalClose);
  function modalClose(){
   lightboxEl.classList.remove('is-open');
    lightboxImageEl.src = '';
    lightboxImageEl.alt = '';
    }
}
 
