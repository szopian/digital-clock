const clock = document.querySelector('.clock');

const tick = () => {
     
    const now = new Date();
    const h = now.getHours()
    const m = now.getMinutes();
    const s = now.getSeconds();

    let amorpm = h >= 12 ? 'pm' : 'am';

    const html = `
        <div class="box">
            <div class="hours">
                <div class="hour">${h}</div>
            </div> 
        </div>
        <div class="box">
            <div class="minutes">
                <div class="minute">${m}</div>
            </div> 
        </div>
        <div class="box">
            <div class="seconds">
                <div class="second">${s}</div>
            </div> 
        </div>
        <div class="box">
            <div class="amorpms">
                <div class="amorpm">${amorpm}</div>
            </div>
        </div>
    `;
    
    clock.innerHTML = html;
}

setInterval(tick, 1000);

// let digitalClock = () => {

//     let date = new Date();

//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     let amorpm = hours >= 12 ? 'pm' : 'am';

    




//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;
//     document.getElementById("amorpm").innerHTML = amorpm;

//     setTimeout(digitalClock, 500);

// } 

// digitalClock();





