import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryImages = createGalleryMarkup(galleryItems);

function createGalleryMarkup(imagesCollections) {
  return imagesCollections
    .map(
      ({ description, original, preview }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="Image description"
          />
        </a>
      </div>`
    )
    .join("");
}

function renderGalleryMarkup(container, markup) {     
    container.insertAdjacentHTML("beforeend", markup);  
}

renderGalleryMarkup(galleryContainer,galleryImages);

galleryContainer.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(evt){  
    evt.preventDefault();
    if(evt.target.nodeName !== 'IMG'){
      return;
    }
     const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}">
  `).show();
 
  }

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    const instance = document.querySelector('.basicLightbox--visible');
    instance.classList.remove('basicLightbox--visible');
    instance.classList.add('basicLightbox--invisible')
  }
});
console.log(galleryItems);
