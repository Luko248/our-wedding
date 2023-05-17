export const initNav = () => {
    const body = document.body as HTMLBodyElement
    const nav = document.querySelector('nav') as HTMLButtonElement
    const scrollWatcher = document.createElement('div')

    scrollWatcher.setAttribute('data-scroll-watcher', '')
    nav.before(scrollWatcher)

    const navObserver = new IntersectionObserver((entries) => {
        nav.classList.toggle('sticked', !entries[0].isIntersecting)
    }, {rootMargin: '200px 0px 0px 0px'})

    navObserver.observe(scrollWatcher)

    const menuBtn = document.getElementById('menuBtn') as HTMLButtonElement
    const menu = document.querySelector('nav ul') as HTMLButtonElement
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('burger--open')
        menu.classList.toggle('open')
    })
}