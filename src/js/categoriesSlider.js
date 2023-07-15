import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const categoriesSlider = () => {
    new Swiper('.categories-slider', {
        modules: [Scrollbar],
        spaceBetween: 30,
        slidesPerView: 6,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1360: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 6,
            },
        },
    });
}

export default categoriesSlider;