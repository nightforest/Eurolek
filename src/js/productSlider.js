import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const productSlider = () => {
    new Swiper('.product-slider', {
        modules: [Navigation],
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

export default productSlider;