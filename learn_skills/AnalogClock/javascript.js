
function updateClock() {
    const sEl = document.getElementById('second');
    const mEl = document.getElementById('minutes');
     const hEl = document.getElementById('hour')

    const now = new Date();

    const ms = now.getMilliseconds();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

// Converting time to degree
    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 *0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    

    sEl.style.transform = `rotate(${secondDeg}deg)`;
    mEl.style.transform = `rotate(${minuteDeg}deg)`;
    hEl.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000)
updateClock();