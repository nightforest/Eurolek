const langDropdown = () => {
    const body = document.querySelector('body');
    const lang = document.querySelector('.lang');
    const langToggle = lang?.querySelector('.lang__toggle');
    const langDropdown = lang?.querySelector('.lang__dropdown');

    langToggle?.addEventListener('click', function() {
        langDropdown?.classList.toggle('is-visible');
        this.classList.toggle('is-active');
    });

    body.addEventListener('click', e => {
        if (!e.target.closest('.lang')) {
            langDropdown?.classList.remove('is-visible');
            langToggle?.classList.remove('is-active');
        }
    });
}

export default langDropdown;