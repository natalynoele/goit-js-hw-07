import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryImages = createGalleryMarkup(galleryItems);

function createGalleryMarkup(imagesCollections) {
  return imagesCollections
    .map(
      ({ description, original, preview }) =>
        `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a></li>`
    )
    .join("");
}

function renderGalleryMarkup(container, markup) {
  container.insertAdjacentHTML("beforeend", markup);
}

renderGalleryMarkup(galleryContainer, galleryImages);

console.log(galleryItems);
