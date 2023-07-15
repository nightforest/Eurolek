import Swiper, { Scrollbar, Grid } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/scrollbar';

const inviteSlider = () => {
    new Swiper('.invite-slider', {
        modules: [Scrollbar, Grid],
        spaceBetween: 30,
        slidesPerView: 3,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        grid: {
            rows: 2,
        },
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
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1360: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    });
}

export default inviteSlider;