// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

import PhotoSwipe from 'photoswipe';
import 'photoswipe/dist/photoswipe.css';

const options = {
  dataSource: [
    {
      name: 'name1',
      src: new URL(
        '../assets/images/appartment/20230510_125536.jpg?as=webp&width=2000',
        import.meta.url
      ),
      width: 2916,
      height: 2018,
      alt: 'test image 1'
    },
    {
      src: new URL(
        '../assets/images/appartment/living-room-2.jpg?as=webp&width=1620',
        import.meta.url
      ),
      width: 1950,
      height: 1300,
      alt: 'test image 2',
      isACoverPhoto: true
    },
    {
      src: new URL(
        '../assets/images/appartment/room-1.jpg?as=webp&width=1620',
        import.meta.url
      ),
      width: 1950,
      height: 1300,
      alt: 'test image 2',
      isACoverPhoto: true
    },
    {
      src: new URL(
        '../assets/images/appartment/20230510_135408.jpg?as=webp&width=1620',
        import.meta.url
      ),
      width: 2268,
      height: 4032,
      alt: 'test image 2',
      isACoverPhoto: false
    },
    {
      src: new URL(
        '../assets/images/appartment/room-2.jpg?as=webp&width=1620',
        import.meta.url
      ),
      width: 1950,
      height: 1300,
      alt: 'test image 2',
      isACoverPhoto: true
    },
    {
      src: new URL(
        '../assets/images/appartment/20230510_085451.jpg?as=webp&width=1890',
        import.meta.url
      ),
      width: 1890,
      height: 3360,
      alt: 'test image 2',
      isACoverPhoto: true
    }
  ],
  showHideAnimationType: 'none'
};

/* Init the GRID or COVER photo gallery in the home page for large devices */

const homePhotos = document.querySelector('#home-photos');

options.dataSource.forEach((p, i) => {
  if (!p.isACoverPhoto) {
    return;
  }
  if (homePhotos.children.length > 4) {
    return;
  }

  let img = document.createElement('img');
  img.className = 'img-fluid object-fit-cover';
  img.src = p.src;
  img.dataset.photoIndex = i;
  homePhotos.appendChild(img);

});



/* Subscribe photoswipe initalization function to onclick event on GRID or COVER photos  */

const homePhotoImages = document.querySelectorAll('#home-photos img');

homePhotoImages.forEach((coverPhoto) => {
  coverPhoto.onclick = () => {
    options.index = parseInt(coverPhoto.dataset.photoIndex); // defines start slide index
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





