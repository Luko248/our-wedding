export const initNav = () => {
    const menuBtn = document.getElementById('menuBtn') as HTMLButtonElement
    const menu = document.querySelector('nav ul') as HTMLButtonElement
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('burger--open')
        menu.classList.toggle('open')
    })
}