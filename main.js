//BUILD PROJECT BUT DON'T USE AVAILABLE FUNCTION, DONT USE SETINTERVAL TIMEOUT

function displayClock () {
    const d = new Date();

    let h = d.getHours();
    let section = h >= 0 && h < 12 ? "AM" : "PM";
    h = (h >= 0 && h < 12 ? h : h - 12).toString().padStart(2, "0");
    const m = d.getMinutes().toString().padStart(2, "0");
    const s = d.getSeconds().toString().padStart(2, "0");
    const clock = `${h}:${m}:${s} ${section}`;
    const h1Text = document.querySelector("h1");
    h1Text.innerHTML = clock;

    setTimeout(displayClock, 1000)
};

displayClock();


