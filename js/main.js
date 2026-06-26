/* ============================================================
   TIER-1 OFF-GRID — main.js
   ============================================================ */

(function () {
  'use strict';

  var nav       = document.getElementById('nav');
  var hamburger = document.getElementById('hamburger');

  // --- Mobile nav toggle ---
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var open = nav.classList.toggle('nav--open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('nav--open') && !nav.contains(e.target)) {
        nav.classList.remove('nav--open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // --- Nav border accent on scroll ---
  var navEl = document.querySelector('.nav');
  if (navEl) {
    window.addEventListener('scroll', function () {
      navEl.style.borderBottomColor = window.scrollY > 120 ? '#C44A1A' : '#3D3D3D';
    }, { passive: true });
  }

  // --- Newsletter form ---
  var form    = document.getElementById('newsletterForm');
  var message = document.getElementById('formMessage');

  if (form && message) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = (form.querySelector('input[type="email"]').value || '').trim();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = 'Enter a valid email address.';
        message.className = 'newsletter__message newsletter__message--error';
        return;
      }

      message.textContent = 'Redirecting to Substack...';
      message.className = 'newsletter__message newsletter__message--success';

      setTimeout(function () {
        window.open(
          'https://tier1offgrid.substack.com/subscribe?email=' + encodeURIComponent(email),
          '_blank',
          'noopener,noreferrer'
        );
      }, 500);
    });
  }

})();
