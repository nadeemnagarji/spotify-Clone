const primaryHeader = document.querySelector('.right-top')
const scrollwatcher = document.createElement('div');

scrollwatcher.setAttribute('data-scroll-watcher','');
primaryHeader.before(scrollwatcher);
const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
})
navObserver.observe(scrollwatcher)