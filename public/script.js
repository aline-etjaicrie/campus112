/* Campus 112 — navigation mobile + transparence hero */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* Nav transparente sur le hero */
  var nav  = document.querySelector('.site-nav');
  var hero = document.querySelector('.hero');
  if (nav && hero) {
    function updateNav() {
      nav.classList.toggle('is-transparent', window.scrollY < hero.offsetHeight - 80);
    }
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }
})();
