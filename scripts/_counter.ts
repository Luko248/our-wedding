export function updateCounter() {
    const counter = document.querySelector('.counter') as HTMLDivElement
    const daysElement = document.querySelector('#days') as HTMLSpanElement
    const hoursElement = document.querySelector('#hours') as HTMLSpanElement
    const minutesElement = document.querySelector('#minutes') as HTMLSpanElement
    const secondsElement = document.querySelector('#seconds') as HTMLSpanElement

    const targetDate = new Date('2023-09-02T13:00:00');
    const currentDate = new Date();
    const remainingTime = targetDate.getTime() - currentDate.getTime();

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    if (remainingTime <= 0) {
        const counterElement = document.querySelector('.counter');
        if (counterElement) {
            counterElement.remove();
        }
        return;
    }

    if (counter) {
        daysElement.innerText = days.toString();
        hoursElement.innerText = hours.toString();
        minutesElement.innerText = minutes.toString();
        secondsElement.innerText = seconds.toString();
    }
    setTimeout(updateCounter, 1000);
}