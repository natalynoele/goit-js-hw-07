import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");


function createGalleryMarkup(imagesCollections) {
  return imagesCollections
    .map(
      ({ description, original, preview }) =>
        `<li class="gallery__item"><img class="gallery__image" src="${preview}" alt="${description}"></li>`
    )
    .join("");
}

function renderGalleryMarkup() {
  if (galleryContainer) {
    const galleryImages = createGalleryMarkup(galleryItems);
    galleryContainer.insertAdjacentHTML("beforeend", galleryImages);
  }
}
renderGalleryMarkup();
console.log(galleryItems);
