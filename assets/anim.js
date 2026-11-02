/* Shared animation script: scroll progress bar and scroll reveals. */
(function () {
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Progress bar at the top of the page
  var bar = document.createElement('div');
  bar.className = 'progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  function progress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var y = window.scrollY || document.documentElement.scrollTop;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
  }
  window.addEventListener('scroll', progress, { passive: true });
  window.addEventListener('resize', progress);
  progress();

  if (calm || !('IntersectionObserver' in window)) return;

  // Scroll reveal: only items below the fold are hidden, so the first screen never flashes.
  var selectors = [
    'section .eyebrow', 'section h2', '.sub', '.filters', '.cols', '.habits > div', '.skills > div',
    '.tags li', '.proj .r', '.svc .row', '.idx a', '.tile', '.contact', '.rules', 'footer'
  ];
  var items = [];
  selectors.forEach(function (sel) {
    var count = new Map();
    document.querySelectorAll(sel).forEach(function (el) {
      var i = count.get(el.parentElement) || 0;
      count.set(el.parentElement, i + 1);
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
        el.classList.add('rv');
        el.style.setProperty('--d', (i % 6) * 70 + 'ms');
        items.push(el);
      }
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.classList.add('in');
      el.addEventListener('animationend', function () {
        el.classList.remove('rv', 'in');
        el.style.removeProperty('--d');
      }, { once: true });
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  items.forEach(function (el) { io.observe(el); });
})();
