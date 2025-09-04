document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const form = document.getElementById('newsletter-form');
  const status = document.getElementById('form-status');
  const modal = document.getElementById('success-modal');
  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.hidden = false;
      status.textContent = 'Versturen…';
      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        if (response.ok) {
          status.textContent = 'Bedankt! Je bent ingeschreven.';
          form.reset();
          playBabymoonAnimation();
          // subtle success pulse
          const card = form.closest('.signup');
          if (card){
            card.classList.add('success');
            setTimeout(()=>card.classList.remove('success'), 800);
          }
          openModal();
        } else {
          status.textContent = 'Hmm, dat lukte niet. Probeer later opnieuw.';
        }
      } catch (err) {
        status.textContent = 'Netwerkfout. Controleer je verbinding.';
      }
    });
  }

  function playBabymoonAnimation(){
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const button = document.querySelector('#newsletter-form .btn');
    const rect = button ? button.getBoundingClientRect() : {left: window.innerWidth/2, top: window.innerHeight/2, width:0, height:0};
    const cx = rect.left + rect.width/2 + window.scrollX;
    const cy = rect.top + rect.height/2 + window.scrollY;
    const icons = ['🌙','⭐','🍼','💛','✨'];
    const count = 10;
    for (let i=0;i<count;i++){
      const node = document.createElement('div');
      node.className = 'babymoon-particle';
      node.textContent = icons[i % icons.length];
      const angle = (Math.PI * 2) * (i / count) + (Math.random()*0.6 - 0.3);
      const distance = 80 + Math.random()*60;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * -distance - 40; // float upward
      const rot = (Math.random()*60 - 30) + 'deg';
      node.style.left = cx + 'px';
      node.style.top = cy + 'px';
      node.style.setProperty('--dx', dx + 'px');
      node.style.setProperty('--dy', dy + 'px');
      node.style.setProperty('--rot', rot);
      document.body.appendChild(node);
      setTimeout(()=> node.remove(), 1600);
    }
  }

  function openModal(){
    if (!modal) return;
    modal.setAttribute('aria-hidden','false');
    const closeEls = modal.querySelectorAll('[data-close]');
    closeEls.forEach(el => el.addEventListener('click', closeModal, { once:true }));
    document.addEventListener('keydown', escToClose, { once:true });
  }

  function closeModal(){
    if (!modal) return;
    modal.setAttribute('aria-hidden','true');
  }

  function escToClose(e){
    if (e.key === 'Escape') closeModal();
  }
});


