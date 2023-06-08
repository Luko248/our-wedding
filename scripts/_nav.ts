export const initNav = (): void => {
    const body = document.body;
    const nav = document.querySelector('nav') as HTMLElement;
    const scrollWatcher = document.createElement('div');
    const isTablet = window.innerWidth <= 768;

    scrollWatcher.setAttribute('data-scroll-watcher', '');
    nav.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
        nav.classList.toggle('sticked', !entries[0].isIntersecting);
    }, { rootMargin: '100% 0px 0px 0px' });

    if (!isTablet) {
        navObserver.observe(scrollWatcher);
    }

    const menuBtn = document.getElementById('menuBtn') as HTMLElement;
    const menu = document.querySelector('nav ul') as HTMLElement;
    const navLinks = menu.querySelectorAll('nav a');

    const closeMenu = (): void => {
        menuBtn.classList.remove('burger--open');
        menu.classList.remove('open');
        body.classList.remove('overflow-hidden');
    };

    const handleClickEvent = (event: Event): void => {
        event.preventDefault();
        const targetId = (event.target as HTMLElement).getAttribute('href')?.substring(1);
        const targetSection = document.getElementById(targetId || '');

        navLinks.forEach((link) => {
            link.classList.remove('active');
        });
        (event.target as HTMLElement).classList.add('active');

        if (targetSection) {
            const topOffset = targetSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth',
            });
        }

        closeMenu();
    };

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('burger--open');
        menu.classList.toggle('open');
        body.classList.toggle('overflow-hidden');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', handleClickEvent);
    });

    document.addEventListener('click', (event) => {
        if (menuBtn && event.target !== menuBtn) {
            closeMenu();
        }
    });

    const isElementMoreThanHalfVisible = (element: HTMLElement): boolean => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top < windowHeight / 2;
    };

    const toggleActiveNavigation = (): void => {
        const sections = document.querySelectorAll('section');

        sections.forEach((section, index) => {
            const navLink = navLinks[index];
            if (isElementMoreThanHalfVisible(section as HTMLElement)) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        });
    };

    const handleScroll = (): void => {
        let isScrolling = false;

        const scrollHandler = (): void => {
            toggleActiveNavigation();
            isScrolling = false;
        };

        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(scrollHandler);
            }
        });
    };

    handleScroll();
};
