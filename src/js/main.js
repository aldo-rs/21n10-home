// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

import PhotoSwipe from 'photoswipe';
import 'photoswipe/dist/photoswipe.css';

import { photoRepository } from "./photo-repository.js";

const options = {
  dataSource: photoRepository.findAll(),
  showHideAnimationType: 'none'
};

/* Init the GRID or COVER photo gallery in the home page for large devices */

const homePhotos = document.querySelector('#home-photos');

photoRepository.findCoverPhotos().forEach((photo) => {
  if (homePhotos.children.length > 4) {
    return;
  }

  let img = document.createElement('img');
  img.className = 'img-fluid object-fit-cover';
  img.src = photo.src;
  img.dataset.photoId = photo.id;

  homePhotos.appendChild(img);
});



/* Subscribe photoswipe initalization function to onclick event on GRID or COVER photos  */

const homePhotoImages = document.querySelectorAll('#home-photos img');

homePhotoImages.forEach((coverPhoto) => {
  coverPhoto.onclick = () => {

    options.index = 0;
    
    options.dataSource.forEach((item, index) => {
      if (item.id === coverPhoto.dataset.photoId) {
        options.index = index;
      }
    });
    
    const pswp = new PhotoSwipe(options);
    pswp.init(); // initializing PhotoSwipe core adds it to DOM
  }
});


/** Swiper initialization */

// Add photos to swiper wapper

const swiperWrapper = document.querySelector('.swiper-wrapper');

options.dataSource.forEach((p, i) => {

  let img = document.createElement('img');
  img.className = 'img-fluid object-fit-cover';
  img.src = p.src;

  let slide = document.createElement('div');
  slide.className = 'swiper-slide';

  slide.appendChild(img);

  swiperWrapper.appendChild(slide);
});



// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  //autoHeight: true, //enable auto height
  pagination: {
    el: ".swiper-pagination",
  },
});


/* Subscribe photoswipe initalization function to onclick event on swiper home photos  */

const swipeHomePhotoImages = document.querySelectorAll('.swiper-wrapper img');

swipeHomePhotoImages.forEach((homePhoto, index) => {
  homePhoto.onclick = () => {
    options.index = index; // defines start slide index
    const pswp = new PhotoSwipe(options);
    pswp.init(); // initializing PhotoSwipe core adds it to DOM
  }
});





