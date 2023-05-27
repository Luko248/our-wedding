export const initNav = () => {
    const body = document.body as HTMLBodyElement;
    const nav = document.querySelector('nav') as HTMLButtonElement;
    const scrollWatcher = document.createElement('div');
    const isTablet = window.innerWidth <= 768

    scrollWatcher.setAttribute('data-scroll-watcher', '');
    nav.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
        nav.classList.toggle('sticked', !entries[0].isIntersecting)
    }, { rootMargin: '100% 0px 0px 0px' });

    if (!isTablet) {
        navObserver.observe(scrollWatcher);
    }

    const menuBtn = document.getElementById('menuBtn') as HTMLButtonElement;
    const menu = document.querySelector('nav ul') as HTMLButtonElement;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('burger--open');
        menu.classList.toggle('open');
        body.classList.toggle('overflow-hidden');
    });

    const navLinks = menu.querySelectorAll('nav a') as NodeListOf<HTMLAnchorElement>;

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            menuBtn.classList.remove('burger--open');
            body.classList.remove('overflow-hidden');
        });
    });
}
