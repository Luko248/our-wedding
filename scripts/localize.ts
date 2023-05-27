import { localize } from 'locale-essentials';

document.addEventListener('DOMContentLoaded', () => {

  const langSwitchElem = document.querySelector('.lang-switch__pop-up') as HTMLDivElement

  const localizeOptions = {
    langDirectory: '../texts/',
    defaultLanguage: 'sk',
    langSwitch: langSwitchElem
  }
  localize(localizeOptions)
})
