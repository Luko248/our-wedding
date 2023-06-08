import { initNav } from "./_nav";
import { initHearts } from "./_hearts";
import { updateCounter } from "./_counter";
import { initMap } from "./_map";
// import { initSeatingPlan } from "./_seatingPlan";

document.addEventListener('DOMContentLoaded', () => {
    initNav()
    initHearts()
    updateCounter()
    initMap()
    // initSeatingPlan()

    const body = document.querySelector('body');
    const headerAnim = document.querySelector('.header__anim');
    const headerAnimDuration = 1900;

    window.setTimeout(() => {
        headerAnim?.remove()
        body?.classList.remove('start')
    }, headerAnimDuration)

    const isTablet = window.innerWidth <= 768
    const questions = document.querySelectorAll('.qna__container > details:not(:first-of-type, :nth-of-type(2))')

    questions.forEach(question => {
        if (isTablet) {
            question.removeAttribute('open')
        }
    });
})