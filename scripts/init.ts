import supportsAvif from 'supports-avif';

import { initHeaderAnim } from './_headerAnim';
import { initNav } from "./_nav";
import { initLangSwitch } from "./_langSwitch";
import { initHearts } from "./_hearts";
import { updateCounter } from "./_counter";
import { initMap } from "./_map";
import { initTheme } from './_theme';
import { initSeatingPlan } from "./_seatingPlan";

document.addEventListener('DOMContentLoaded', () => {
    supportsAvif.then((isSupported) => document.body.classList.toggle('avif', isSupported));
    initTheme()
    initHeaderAnim()
    initNav()
    initLangSwitch()
    initHearts()
    updateCounter()

    let firstScrollLogged = false;

    window.addEventListener('scroll', () => {
        if (!firstScrollLogged) {
            initMap()
            initSeatingPlan()
            firstScrollLogged = true
        }
    })
})