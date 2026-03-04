/**
 * Scroll Animations using Intersection Observer
 * Adds 'visible' class to elements when they enter viewport
 */

(function() {
  'use strict';

  // Animation configuration
  const config = {
    // Threshold: 0.1 = trigger when 10% visible
    // Root margin: -50px from top to trigger slightly before element is fully visible
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all elements immediately
    document.querySelectorAll('.fade-in, .slide-up, .fade-slide, .fade-in-left, .fade-in-right, .fade-scale, .animated-section, .animate-children').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // Create Intersection Observer instance
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger animation
        entry.target.classList.add('visible');

        // Stop observing once animation is triggered (optional - remove if you want re-animation on scroll up)
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: config.threshold,
    rootMargin: config.rootMargin
  });

  // Elements to animate
  const animatedSelectors = [
    '.fade-in',
    '.slide-up',
    '.fade-slide',
    '.fade-in-left',
    '.fade-in-right',
    '.fade-scale',
    '.animated-section',
    '.animate-children'
  ];

  // Observe all animated elements
  function initAnimations() {
    const elements = document.querySelectorAll(animatedSelectors.join(', '));

    elements.forEach(el => {
      observer.observe(el);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }

  // Also run after Astro View Transitions (if enabled)
  document.addEventListener('astro:page-load', initAnimations);

})();
