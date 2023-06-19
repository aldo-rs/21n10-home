// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

import PhotoSwipe from 'photoswipe';
import 'photoswipe/dist/photoswipe.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  //autoHeight: true, //enable auto height
  pagination: {
    el: ".swiper-pagination",
  },
});

const options = {
  dataSource: [
    // simple image
    {
      name: 'name1',
      src: new URL(
        '20230510_125536.jpg?as=webp&width=2000',
        import.meta.url
      ),
      width: 2916,
      height: 2018,
      alt: 'test image 1'
    },
    {
      src: new URL(
        'living-room-2.jpg?as=webp&width=1620',
        import.meta.url
      ),
      width: 1950,
      height: 1300,
      alt: 'test image 2'
    },
    {
      src: new URL(
        'room-1.jpg?as=webp&width=1620',
        import.meta.url
      ),
      width: 1950,
      height: 1300,
      alt: 'test image 2'
    },
    {
      src: new URL(
        'room-2.jpg?as=webp&width=1620',
        import.meta.url
      ),
      width: 1950,
      height: 1300,
      alt: 'test image 2'
    },
    {
      src: new URL(
        '20230510_085451.jpg?as=webp&width=1890',
        import.meta.url
      ),
      width: 1890,
      height: 3360,
      alt: 'test image 2'
    }
  ],
  showHideAnimationType: 'none'
};

const homePhotoImages = document.querySelectorAll('#home-photos img');

homePhotoImages.forEach((homePhoto, index) => {
  homePhoto.onclick = () => {
    options.index = index; // defines start slide index
    const pswp = new PhotoSwipe(options);
    pswp.init(); // initializing PhotoSwipe core adds it to DOM
  }
});