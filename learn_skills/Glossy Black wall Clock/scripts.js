document.addEventListener('DOMContentLoaded', () => {
  // Containers
  const ticksContainer = document.getElementById('ticks');
  const numsContainer  = document.getElementById('nums');

  if (!ticksContainer || !numsContainer) {
    console.error('Clock containers (ticks or nums) not found in DOM.');
    return;
  }

  // Build ticks (60 marks, major every 5)
  for (let i = 0; i < 60; i++) {
    const t = document.createElement('div');
    t.className = 'tick' + (i % 5 === 0 ? ' major' : '');
    
    // rotate first, then push outward from center
    t.style.transform = `rotate(${i * 6}deg) translateY(-48%)`;
    ticksContainer.appendChild(t);
  }

  // Build numerals (1..12 around the dial)
  const radiusPct = 40; // distance from center (percent)
  for (let i = 1; i <= 12; i++) {
    const angle = (i - 3) * (Math.PI / 6); // position 12 at top
    const x = 50 + radiusPct * Math.cos(angle);
    const y = 50 + radiusPct * Math.sin(angle);
    const n = document.createElement('div');
    n.className = 'num';
    n.style.left = x + '%';
    n.style.top  = y + '%';
    n.textContent = i;
    numsContainer.appendChild(n);
  }

  // Hands
  const hourHand   = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');

  if (!hourHand || !minuteHand || !secondHand) {
    console.error('One or more hand elements (hour/minute/second) are missing.');
    return;
  }

  // anchor at bottom center
  [hourHand, minuteHand, secondHand].forEach(el => {
    el.style.transformOrigin = 'bottom center';
  });

  // Make shafts fill their .hand container
  function layoutHands() {
    document.querySelectorAll('.hand').forEach(h => {
      if (h.firstElementChild) h.firstElementChild.style.height = '100%';
    });
  }
  layoutHands();

  // Update hand rotation
  function update() {
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours   = (now.getHours() % 12) + minutes / 60;

    const sDeg = seconds * 6; // 360/60
    const mDeg = minutes * 6;
    const hDeg = hours * 30;  // 360/12

    hourHand.style.transform   = `translate(-50%, -100%) rotate(${hDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${mDeg}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${sDeg}deg)`;
  }

  // Animation loop
  function tickLoop() {
    update();
    requestAnimationFrame(tickLoop);
  }
  tickLoop(); // start the loop
});
