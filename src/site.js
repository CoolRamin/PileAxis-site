/* PileAxis website (shared with FoundaTrix Studio's site): the little behaviour the pages share. No dependencies.
   Everything here is an enhancement: with scripts off, every page reads and navigates the same. */
(function () {
  'use strict';

  // Mobile navigation: the menu button opens and closes the links under the bar.
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');
  if (nav && toggle) {
    var setOpen = function (open) {
      nav.classList.toggle('nav--open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('nav--open'));
    });
    nav.querySelectorAll('.nav__menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 921px)').addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  }

  // Back to top.
  var topBtn = document.getElementById('scrollTopBtn');
  if (topBtn) {
    var onScroll = function () {
      topBtn.classList.toggle('scroll-top--visible', window.scrollY > 560);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    onScroll();
  }

  // Fade sections in as they arrive. Only what starts BELOW the window is ever hidden, so nothing
  // already on screen flickers, and nothing is hidden at all without IntersectionObserver.
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal--pending');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('reveal--pending');
        observer.observe(el);
      }
    });
  }
})();
