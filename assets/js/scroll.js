/* ========================================
   SCROLL.JS — Scroll-to-Top & Animations
   ======================================== */

(function() {
  // --- Scroll to Top Button ---
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  function handleScrollTopVisibility() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('scroll-top--visible');
    } else {
      scrollTopBtn.classList.remove('scroll-top--visible');
    }
  }

  if (scrollTopBtn) {
    window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Scroll-Triggered Animations (IntersectionObserver) ---
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in');

  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up--visible', 'fade-in--visible');
          animationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => animationObserver.observe(el));
  } else {
    // Fallback: show everything immediately
    animatedElements.forEach(el => {
      el.classList.add('fade-in-up--visible', 'fade-in--visible');
    });
  }
})();
