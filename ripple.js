function ripple(element) {
  element.addEventListener('click', event => {
    const side = Math.max(element.clientWidth, element.clientHeight);
    const x = event.x - element.getBoundingClientRect().top;
    const y = event.y - element.getBoundingClientRect().left;

    const ripple = document.createElement('span');
    ripple.className = 'ripple__effect';

    ripple.style.width = `${side}px`;
    ripple.style.height = `${side}px`;
    ripple.style.top = `${y - side / 2}px`;
    ripple.style.left = `${x - side / 2}px`;

    element.appendChild(ripple);

    ripple.classList.add('ripple__effect--animate');
    setTimeout(() => ripple.remove(), 400);
  });
}
