import { localize } from 'locale-essentials';

document.addEventListener('DOMContentLoaded', () => {

  const langSwitchElem = document.querySelector('.lang-switch__pop-up') as HTMLDivElement
  const LangButtons = langSwitchElem.querySelectorAll('button') as NodeListOf<HTMLButtonElement>

  const localizeOptions = {
    langDirectory: '../texts/',
    defaultLanguage: 'sk',
    langSwitch: langSwitchElem
  }
  localize(localizeOptions)
})