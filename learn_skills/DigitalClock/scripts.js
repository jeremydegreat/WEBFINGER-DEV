document.addEventListener("DOMContentLoaded", () => {
    const number = document.getElementById('numbers');
    const clock_height = 40;
   
    for(let i = 1; i<= 12; i++) {
        const angle = (i - 3) * (Math.PI/6);
        const x = 50 + clock_height * Math.cos(angle);
        const y = 50 + clock_height * Math.sin(angle);

        const n = document.createElement('div');
        n.className = 'numb';
        n.style.left = x + '%';
        n.style.top  = y + '%';
        n.textContent = i;
        number.appendChild(n);

    }
})