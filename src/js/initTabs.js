import Tabs from './tabs';

const initTabs = () => {
    const tabsAll = document.querySelectorAll('[data-tabs]');

    tabsAll?.forEach(item => {
        const tabID = item.getAttribute('data-tabs');
        const tabsToggle = item.querySelector('.tabs__toggle');
        const tabsNavAll = item.querySelectorAll('.tabs__nav-btn');

        new Tabs(tabID, {
            active: 0,
            transition: 300,
        });

        function tabsToggleFunc() {
            if (tabsToggle && window.innerWidth < 768) {
                tabsToggle.innerHTML = item.querySelector('.tabs__nav-btn.is-active').innerText;

                tabsToggle.addEventListener('click', () => {
                    item.querySelector('.tabs__nav').classList.toggle('is-visible');
                });

                tabsNavAll.forEach(nav => {
                    nav.addEventListener('click', () => {
                        tabsToggle.innerHTML = nav.innerText;
                        item.querySelector('.tabs__nav').classList.remove('is-visible');
                    });
                });
            }
        }

        tabsToggleFunc();

        window.addEventListener('resize', function() {
            tabsToggleFunc();
        });
    });
}

export default initTabs;