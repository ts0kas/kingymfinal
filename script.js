// Mobile menu toggle
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    const nb = document.getElementById('navbar');
    if (window.scrollY > 60) {
      nb.style.background = 'rgba(8,8,8,0.98)';
    } else {
      nb.style.background = 'rgba(8,8,8,0.9)';
    }
  });