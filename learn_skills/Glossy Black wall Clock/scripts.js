// Build ticks (60 marks, major every 5)
const ticks = document.getElementById('ticks');
for(let i=0; i<60; i++){
const t = document.createElement('div');
t.className = 'tick' + (i%5===0 ? ' major' : '');
t.style.transform = `translate(-50%, -50%) rotate(${i*6}deg)`;
ticks.appendChild(t);
}


// Build numerals (12,1..11 around the dial)
const nums = document.getElementById('nums');
const radiusPct = 40; // distance from center
for(let i=1; i<=12; i++){
const angle = (i-3) * (Math.PI/6); // offset so 12 is at top
const x = 50 + radiusPct * Math.cos(angle);
const y = 50 + (radiusPct-1) * Math.sin(angle);
const n = document.createElement('div');
n.className = 'num';
n.style.left = x + '%';
n.style.top = y + '%';
n.textContent = i;
nums.appendChild(n);
}

// Clock movement
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');


function update(){
const now = new Date();
const ms = now.getMilliseconds();
const s = now.getSeconds() + ms/1000;
const m = now.getMinutes() + s/60;
const h = (now.getHours()%12) + m/60;


const sDeg = s * 6; // 360/60
const mDeg = m * 6; // 360/60
const hDeg = h * 30; // 360/12


// Rotate around the bottom center of each hand
hourHand.style.transform = `translate(-50%, -100%) rotate(${hDeg}deg)`;
minuteHand.style.transform = `translate(-50%, -100%) rotate(${mDeg}deg)`;
secondHand.style.transform = `translate(-50%, -100%) rotate(${sDeg}deg)`;
}

// Set hand anchor points (bottom center)
[hourHand, minuteHand, secondHand].forEach(el=>{
el.style.transformOrigin = 'bottom center';
});


// Size shafts so they start at center and extend outwards
function layoutHands(){
document.querySelectorAll('.hand').forEach(h=>{
h.firstElementChild.style.height = '100%';
});
}

layoutHands();
update();
setInterval(update, 50); // smooth sweep