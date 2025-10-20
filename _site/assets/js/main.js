// Main JavaScript file

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }

  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });

    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

// Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Active navigation highlighting
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-nav a, .mobile-menu a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });

  // Lazy loading images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Copy code button for code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerHTML = '<i class="fas fa-copy"></i>';
    button.setAttribute('aria-label', 'Copy code');
    
    const pre = block.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    button.addEventListener('click', function() {
      const code = block.textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.classList.add('copied');
        
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i>';
          button.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy code:', err);
      });
    });
  });

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-card, .project-card, .post-preview').forEach(el => {
    el.classList.add('fade-ready');
    fadeObserver.observe(el);
  });

  // External links open in new tab
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // Reading time calculator
  const articleContent = document.querySelector('.post-content, .page-content');
  const readingTimeElement = document.querySelector('.reading-time');
  
  if (articleContent && readingTimeElement) {
    const text = articleContent.textContent;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed
    readingTimeElement.textContent = `${readingTime} min read`;
  }

  // Terminal typing effect for hero
  const terminalText = document.querySelector('.glitch');
  
  if (terminalText) {
    const text = terminalText.getAttribute('data-text');
    if (text) {
      let index = 0;
      terminalText.textContent = '';
      
      function type() {
        if (index < text.length) {
          terminalText.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100);
        }
      }
      
      setTimeout(type, 500);
    }
  }

  // Form validation (if contact form exists)
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Basic validation
      if (!data.email || !data.message) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Here you would send the form data to your backend
      console.log('Form data:', data);
      alert('Message sent successfully!');
      this.reset();
    });
  }

  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    .fade-ready {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .copy-code-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #00ff41;
      color: #0a0e27;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
      z-index: 10;
    }
    
    .copy-code-btn:hover {
      background: #00d9ff;
      transform: scale(1.05);
    }
    
    .copy-code-btn.copied {
      background: #00aa00;
    }
  `;
  document.head.appendChild(style);
});

// Page load performance
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Console easter egg
console.log('%c🛡️ Cybersecurity Portfolio', 'color: #00ff41; font-size: 20px; font-weight: bold;');
console.log('%cLooking for something? Try the Konami Code... ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #00d9ff; font-size: 14px;');

// Konami Code Easter Egg
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
  konamiCode.push(e.key);
  konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
  
  if (konamiCode.join('').includes(konamiPattern.join(''))) {
    activateMatrixMode();
  }
});

function activateMatrixMode() {
  console.log('%c🎉 Matrix Mode Activated!', 'color: #00ff41; font-size: 16px; font-weight: bold;');
  document.body.style.animation = 'matrix-pulse 2s infinite';
}