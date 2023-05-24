import { localize } from 'locale-essentials';

document.addEventListener('DOMContentLoaded', () => {

  const langSwitchElem = document.getElementById('langSwitch') as HTMLDivElement
  const LangButtons = langSwitchElem.querySelectorAll('button') as NodeListOf<HTMLButtonElement>

  const localizeOptions = {
    langDirectory: '../texts/',
    defaultLanguage: 'sk',
    langSwitch: langSwitchElem
  }

  LangButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const langQueryParam = new URLSearchParams(window.location.search).get('lang')
      const dataLang = button.getAttribute('data-lang')

      if (langQueryParam === dataLang) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      }
    })
  })
  localize(localizeOptions)
})