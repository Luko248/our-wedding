export const initLangSwitch = (): void => {
    const langSwitchBtn = document.getElementById('langSwitchBtn') as HTMLButtonElement
    const langSwitchElem = document.querySelector('.lang-switch__pop-up') as HTMLDivElement

    langSwitchBtn.addEventListener('click', () => {
        langSwitchElem.classList.toggle('open')
    })

    document.addEventListener('click', (e) => {
        if (e.target !== langSwitchBtn) {
            langSwitchElem.classList.remove('open')
        }
    })
}