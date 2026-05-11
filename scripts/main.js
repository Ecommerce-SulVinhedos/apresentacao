/* ===================================================
   VINERY LANDING PAGE — JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Initialize Lucide Icons ----------
  if (window.lucide) {
    lucide.createIcons();
  }

  // ---------- Initialize AOS Animations ----------
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }

  // ---------- Navbar Scroll Effect ----------
  var navbar = document.getElementById('navbar');
  var scrollThreshold = 50;

  function handleNavbarScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ---------- Mobile Hamburger Menu ----------
  var hamburger = document.getElementById('hamburger');
  var navbarLinks = document.getElementById('navbarLinks');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navbarLinks.classList.toggle('open');
  });

  // Close menu when clicking a link
  var navLinks = navbarLinks.querySelectorAll('a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navbarLinks.classList.remove('open');
    });
  });

  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navbarHeight = navbar.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------- Active Nav Link Highlight ----------
  var sections = document.querySelectorAll('section[id]');
  var navLinksAll = document.querySelectorAll('.nav-link');

  function highlightNavLink() {
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 120;
      var sectionBottom = sectionTop + section.offsetHeight;
      var sectionId = section.getAttribute('id');
      var correspondingLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');

      if (correspondingLink) {
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          navLinksAll.forEach(function (l) { l.classList.remove('active'); });
          correspondingLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink, { passive: true });

  // ---------- Back to Top Button ----------
  var backToTop = document.getElementById('backToTop');

  function handleBackToTop() {
    if (window.scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleBackToTop, { passive: true });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- Counter Animation on Stats ----------
  var statNumbers = document.querySelectorAll('.stat-number[data-count]');
  var statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;

    var statsSection = document.querySelector('.stats-grid');
    if (!statsSection) return;

    var rect = statsSection.getBoundingClientRect();
    var isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;

    if (isVisible) {
      statsAnimated = true;

      statNumbers.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1500;
        var startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.round(eased * target);
          el.textContent = current + suffix;

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        }

        requestAnimationFrame(step);
      });
    }
  }

  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  // ---------- Chat Messages Sequential Animation ----------
  var chatWidget = document.getElementById('chatWidget');
  var chatAnimated = false;

  function animateChatMessages() {
    if (chatAnimated || !chatWidget) return;

    var rect = chatWidget.getBoundingClientRect();
    var isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

    if (isVisible) {
      chatAnimated = true;
      var messages = chatWidget.querySelectorAll('.chat-msg');

      messages.forEach(function (msg, index) {
        setTimeout(function () {
          msg.classList.add('visible');
        }, 400 + index * 600);
      });
    }
  }

  window.addEventListener('scroll', animateChatMessages, { passive: true });
  animateChatMessages();

  // ---------- Lightbox for Screenshots ----------
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Clickable mockup frames
  document.querySelectorAll('[data-lightbox]').forEach(function (frame) {
    frame.addEventListener('click', function () {
      var img = this.querySelector('.mockup-screenshot');
      if (img) openLightbox(img.src, img.alt);
    });
  });

  // Button triggers (Ver Dashboard / Conhecer o Painel)
  document.querySelectorAll('[data-lightbox-trigger]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var src = this.getAttribute('data-lightbox-trigger');
      openLightbox(src, '');
    });
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

});
