export const initNav = () => {
    const body = document.body as HTMLBodyElement;
    const nav = document.querySelector('nav') as HTMLButtonElement;
    const scrollWatcher = document.createElement('div');
    const isTablet = window.innerWidth <= 768;

    scrollWatcher.setAttribute('data-scroll-watcher', '');
    nav.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
        !isTablet 
        ? nav.classList.toggle('sticked', !entries[0].isIntersecting)
        : nav.classList.toggle('visible', window.pageYOffset <= 0);
    }, { rootMargin: '100% 0px 0px 0px' });

    navObserver.observe(scrollWatcher);

    const menuBtn = document.getElementById('menuBtn') as HTMLButtonElement;
    const menu = document.querySelector('nav ul') as HTMLButtonElement;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('burger--open');
        menu.classList.toggle('open');
    });

    const navLinks = menu.querySelectorAll('nav a') as NodeListOf<HTMLAnchorElement>;

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            menuBtn.classList.remove('burger--open');
        });
    });
}
