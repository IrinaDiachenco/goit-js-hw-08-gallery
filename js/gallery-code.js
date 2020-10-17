import images from './gallery-items.js';
console.log(images)
const galleryItem = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.lightbox')
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
 
galleryItem.insertAdjacentHTML('afterbegin', galleryItemMarkup)

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
    
    return evt.target.dataset.source;
    lightboxEl.classList.remove('is-open');
}
    
//function clearLightBoxImage() {
  //refs.lightBoxImage.removeAttribute("src");
  //refs.lightBoxImage.removeAttribute("alt");
//}

//function removeClassListOnEvent() {
  //refs.lightbox.classList.remove("is-open");
  //clearLightBoxImage();
//}
//function onCloseModal(e) {
  //if (e.target.nodeName === "I" || e.target.nodeName === "BUTTON") {
    //removeClassListOnEvent();
  //}