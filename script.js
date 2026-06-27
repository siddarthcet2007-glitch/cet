 const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));

  // Scroll reveal
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: 0.1 });
  els.forEach(el => io.observe(el));