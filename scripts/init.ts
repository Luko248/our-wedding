import { initHeaderAnim } from './_headerAnim';
import { initNav } from "./_nav";
import { initHearts } from "./_hearts";
import { updateCounter } from "./_counter";
import { initMap } from "./_map";
// import { initSeatingPlan } from "./_seatingPlan";

document.addEventListener('DOMContentLoaded', () => {
    initHeaderAnim()
    initNav()
    initHearts()
    initMap()
    updateCounter()
    // initSeatingPlan()

    const isTablet = window.innerWidth <= 768
    const questions = document.querySelectorAll('.qna__container > details:not(:first-of-type, :nth-of-type(2))')

    questions.forEach(question => {
        if (isTablet) {
            question.removeAttribute('open')
        }
    });
})