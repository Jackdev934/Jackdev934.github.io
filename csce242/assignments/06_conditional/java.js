document.addEventListener('DOMContentLoaded', () => {
  const link1 = document.querySelector('nav li:nth-child(1) a');
  const link2 = document.querySelector('nav li:nth-child(2) a');
  const planter = document.getElementById('planter');
  const clock = document.getElementById('clock');
  const txt = document.getElementById('txt');

  // Planter elements
  const sizeSlider = document.getElementById('sizeSlider');
  const sizeValue  = document.getElementById('sizeValue');
  const daysMsg    = document.getElementById('days');

  // show planter, hide clock
  planter.classList.remove('hidden');
  clock.classList.add('hidden');

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
    } else { // 75-100
      msg = "Plant watered 12 days ago, Plant is dead.";
    }
    daysMsg.textContent = msg;
  }

  // Initialize once and update on input
  updateSliderUI();
  sizeSlider.addEventListener('input', updateSliderUI);
  sizeSlider.addEventListener('change', updateSliderUI);

  // World Clock
  function renderTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    if (txt) txt.textContent = `${h}:${m}:${s}`;
  }
  renderTime();
  setInterval(renderTime, 1000);

  // Nav switching
  link1.addEventListener('click', (e) => {
    e.preventDefault();
    planter.classList.remove('hidden');
    clock.classList.add('hidden');
  });

  link2.addEventListener('click', (e) => {
    e.preventDefault();
    clock.classList.remove('hidden');
    planter.classList.add('hidden');
  });
});
