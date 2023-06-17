// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// core version + navigation, pagination modules:
import Swiper, {Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    //autoHeight: true, //enable auto height
    pagination: {
        el: ".swiper-pagination",
      },
});