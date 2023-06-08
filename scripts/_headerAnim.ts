export const initHeaderAnim = (): void => {
    const body = document.querySelector('body');
    const headerAnim = document.querySelector('.header__anim');
    const headerAnimDuration = 1900;

    const targetDate = new Date('2023-09-02T13:00:00');
    const currentDate = new Date();

    if (currentDate > targetDate) {
        const spans = document.querySelectorAll('.header__anim span');
        spans.forEach((span, index) => {
            const localizedAttribute = `anim_part-${index + 1}_after`;
            span.setAttribute('data-localize', localizedAttribute);
        });
    }

    window.setTimeout(() => {
        headerAnim?.remove()
        body?.classList.remove('start')
    }, headerAnimDuration)
}