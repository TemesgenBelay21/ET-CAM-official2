/* ========================================
   FAQ-ACCORDION.JS — FAQ Expand/Collapse
   ======================================== */

(function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-item__trigger');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('faq-item--active');

      // Close all items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('faq-item--active');
      });

      // Open clicked item (if it wasn't already open)
      if (!isActive) {
        item.classList.add('faq-item--active');
      }
    });
  });
})();
