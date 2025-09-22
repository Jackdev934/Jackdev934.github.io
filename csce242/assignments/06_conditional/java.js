document.addEventListener('DOMContentLoaded', () => {
    //Constants 
  const nav        = document.querySelector('nav.nav');
  const navToggle  = document.getElementById('navToggle');
  const navList    = document.getElementById('navList');
  const link1   = document.querySelector('nav li:nth-child(1) a');
  const link2   = document.querySelector('nav li:nth-child(2) a');
  const planter = document.getElementById('planter');
  const clock   = document.getElementById('clock');
  const txt     = document.getElementById('txt');
  const sizeSlider = document.getElementById('sizeSlider');
  const sizeValue  = document.getElementById('sizeValue');
  const daysMsg    = document.getElementById('days');

  // Default: show planter, hide clock
  planter.classList.remove('hidden');
  clock.classList.add('hidden');

  // Planter: messages per range
  function updateSliderUI() {
    const val = Number(sizeSlider.value); 
    sizeValue.textContent = `${val}%`;

    let msg = '';
    if (val <= 24) {
      msg = "Plant watered 1 day ago, you're good for now.";
    } else if (val <= 49) {
      msg = "Plant watered 3 days ago, plan a light watering soon.";
    } else if (val <= 74) {
      msg = "Plant watered 6 days ago, you must water your plants today.";
    } else {
      msg = "Plant watered 12 days ago, Plant is dead.";
    }
    daysMsg.textContent = msg;
  }
  updateSliderUI();
  sizeSlider.addEventListener('input', updateSliderUI);
  sizeSlider.addEventListener('change', updateSliderUI);

  //World Clock 
  function renderTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    if (txt) txt.textContent = `${h}:${m}:${s}`;
  }
  renderTime();
  setInterval(renderTime, 1000);

  // Nav: small-screen toggle
  const mqSmall = window.matchMedia('(max-width: 599px)');

  function toggleNav() {
    const isOpen = nav.classList.toggle('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', String(isOpen));
  }

  function closeNavIfSmall() {
    if (mqSmall.matches) {
      nav.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (navToggle) {
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNav();
    });
  }

  // Close the menu after choosing an item (on small screens)
  navList.addEventListener('click', (e) => {
    if (e.target.matches('a')) {
      closeNavIfSmall();
    }
  });

  // Nav switching between sections
  link1.addEventListener('click', (e) => {
    e.preventDefault();
    planter.classList.remove('hidden');
    clock.classList.add('hidden');
    closeNavIfSmall();
  });

  link2.addEventListener('click', (e) => {
    e.preventDefault();
    clock.classList.remove('hidden');
    planter.classList.add('hidden');
    closeNavIfSmall();
  });
});
