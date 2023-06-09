export const initHearts = (): void => {
  const header = document.querySelector('header') as HTMLElement;

  if (!header || window.innerWidth < 768) {
    return;
  }

  let animationFrameId: number;

  function createHeart(x: number, y: number): HTMLDivElement {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '♥';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    const bubbleDuration = Math.random() * 2 + 1;
    const scaleDuration = Math.random() * 2 + 1;
    const totalDuration = Math.min(bubbleDuration, scaleDuration, 5);
    heart.style.animationDuration = `${totalDuration}s`;

    setTimeout(() => {
      heart.remove();
    }, totalDuration * 1000);

    return heart;
  }

  function shouldGenerateHeart(): boolean {
    // Adjust the probability value as needed (20% = 0.2)
    const probability = 0.2;
    const randy = Math.random();
    return randy < probability;
  }

  function addHeartToHeader(event: MouseEvent): void {
    if (!shouldGenerateHeart()) {
      return;
    }

    const x = Math.floor(event.clientX / 20) * 20;
    const y = Math.floor(event.clientY / 20) * 20;
    const heart = createHeart(x, y);
    header.appendChild(heart);
  }

  function handleAnimationFrame(event: MouseEvent): void {
    addHeartToHeader(event);
  }

  function handleMouseMove(event: MouseEvent): void {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => handleAnimationFrame(event));
  }

  function stopAnimation(): void {
    cancelAnimationFrame(animationFrameId);
    header.removeEventListener('mousemove', handleMouseMove);
  }

  header.addEventListener('mouseenter', () => {
    header.addEventListener('mousemove', handleMouseMove);
  });

  header.addEventListener('mouseleave', stopAnimation);
};
