const rightNav = () => {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const mobileNav = document.querySelector(".right-nav");
    const mobileNavToggle = document.querySelector("[data-right-toggle]");
    const paddingRight = window.innerWidth - document.documentElement.clientWidth;
    
    mobileNavToggle?.addEventListener('click', e => {
        e.preventDefault();
        mobileNavShowHide();
    });

    mobileNav?.addEventListener('click', e => {
        if (!e.target.closest('.right-nav__sidebar')) {
            mobileNavShowHide();
        }
    });

    function mobileNavShowHide() {
        header?.classList.toggle('is-active');
        mobileNav?.classList.toggle('is-visible');
        mobileNavToggle?.classList.toggle('is-active');

        if (mobileNav.classList.contains('is-visible')) {
            body.classList.add('scroll-disabled');
            body.style.paddingRight = paddingRight + 'px';
            header.style.paddingRight = paddingRight + 'px';
        } else {
            setTimeout(() => {
                body.classList.remove('scroll-disabled');
                body.style.paddingRight = '0px';
                header.style.paddingRight = '0px';
            }, 500);
        }
    }
}

export default rightNav;