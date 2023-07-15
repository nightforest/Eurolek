const missionToggle = () => {
    const missionCardAll = document.querySelectorAll('.mission-card');

    missionCardAll?.forEach(item => {
        const missionCardToggle = item.querySelector('.mission-card__toggle');
        const missionCardDropdown = item.querySelector('.mission-card__body');
        
        missionCardToggle?.addEventListener('click', () => {
            missionCardToggle.closest('.mission-card').classList.toggle('is-open');

            missionCardToggle.closest('.mission-card.is-open')
                ? missionCardDropdown.style.maxHeight = missionCardDropdown.scrollHeight + 'px'
                : missionCardDropdown.style.maxHeight = null;
        });

        // missionCardToggle?.closest('.accordion.is-open')
        //     ? accordionDropdown.style.maxHeight = accordionDropdown.scrollHeight + 'px'
        //     : accordionDropdown.style.maxHeight = null;
    });
}

export default missionToggle;