document.addEventListener('DOMContentLoaded', ()=>{
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const shown = nav.style.display === 'flex';
      nav.style.display = shown ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0.6rem';
      nav.style.padding = '1rem';
      nav.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))';
      nav.style.borderRadius = '10px';
    })
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        if(nav && window.innerWidth<=880) nav.style.display = 'none';
      }
    })
  })
})
