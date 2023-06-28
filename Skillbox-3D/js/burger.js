const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('[data-nav]');
const menuLinks = menu?.querySelectorAll('a');

burger?.addEventListener('click',
  function ()  {

    burger?.classList.toggle('burger--active');

    menu?.classList.toggle('header__nav--active');

    burger?.removeAttribute('aria-label', 'Открыть меню');

    burger?.setAttribute('aria-label', 'Закрыть меню');

    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(el => {
  el.addEventListener('click', () => {

    burger?.classList.remove('burger--active');

    menu?.classList.remove('header__nav--active');

    burger?.removeAttribute('aria-label', 'Закрыть меню');

    burger?.setAttribute('aria-label', 'Открыть меню');

    document.body.classList.remove('stop-scroll');
  })
})
