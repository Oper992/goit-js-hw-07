import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

function renderingGallery() {
  const arrayEl = galleryItems
    .map(
      (image) =>
        `<div class = "gallery__item"><a class = "gallery__link" href="${image.original}"><img class = "gallery__image" src = "${image.preview}" data-source="${image.original}" alt = "${image.description}"><a/></div>`
    )
    .join("");

  galleryRef.insertAdjacentHTML("beforeend", arrayEl);
}
const increaseImage = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log(e.target.nodeName );
};

renderingGallery();
galleryRef.addEventListener("click", increaseImage);

console.log(galleryRef);
