const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

// two ways to make this homwork, what I found

// The first way

/* 
// function to create a image card
const createImageElements = (imgInfo) => {
  // create li element
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery-item");

  // create img element
  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery-image");
  galleryImage.src = imgInfo.url;
  galleryImage.alt = imgInfo.alt;

  galleryItem.append(galleryImage);

  return galleryItem;
};

// console.log(createImageElements(images));

// cicle for all card in images
const addImage = images.map(image => createImageElements(image));

// add element to the body of the page
const gallery = document.querySelector('.gallery');
gallery.append(...addImage);
*/

// The second way

// function to create a image card
const createPictureCard = (imgcard) => {
  return `
  <li class="gallery-item">
    <img class="gallery-image" src="${imgcard.url}" alt="${imgcard.alt}"/>
  </li>
  `;
};

// create an array with elements of image card
const imagesArray = images.map((image) => createPictureCard(image)).join("");

// add element to the page
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML('beforeend', imagesArray);
