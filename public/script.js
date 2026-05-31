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

  /* Accordéon verbes */
  document.querySelectorAll('.verb-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var entry = item.parentElement;
      var card  = entry.querySelector('.verb-card');
      if (!card) return;
      var opening = !card.classList.contains('open');
      document.querySelectorAll('.verb-card.open').forEach(function(c) {
        c.classList.remove('open');
        c.setAttribute('aria-hidden', 'true');
        c.parentElement.querySelector('.verb-item').classList.remove('active');
        c.parentElement.querySelector('.verb-item').setAttribute('aria-expanded', 'false');
      });
      if (opening) {
        card.classList.add('open');
        card.setAttribute('aria-hidden', 'false');
        item.classList.add('active');
        item.setAttribute('aria-expanded', 'true');
      }
    });
  });

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
