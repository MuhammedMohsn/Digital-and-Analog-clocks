let minute_hand = document.querySelector(".minute_hand");
let hour_hand = document.querySelector(".hour_hand");
let second_hand = document.querySelector(".second_hand")

let ampm_div = document.querySelector(".ampm")
let hour_div = document.querySelector(".hour")
let minutes_div = document.querySelector(".minutes")
let seconds_div = document.querySelector(".seconds")
let toggled_div = document.querySelector(".toggled")
setInterval(() => {
    let current_time = new Date();
    console.log("Current time: " + current_time)
    let hours = current_time.getHours();
    let minutes = current_time.getMinutes();
    let seconds = current_time.getSeconds();
    ampm_div.innerHTML = hours > 12 ? "pm" : "am"
    hours = hours % 12;
    hours = hours ? hours : 12;
    let hour_deg = hours * 30 + (.5 * minutes);
    let sec_deg = seconds * 6;
    let minute_deg = minutes * 6 + (.1 * seconds);
    hour_hand.style.transform = `rotate(${hour_deg}deg)`
    minute_hand.style.transform = `rotate(${minute_deg}deg)`
    second_hand.style.transform = `rotate(${sec_deg}deg)`
    hours = hours < 10 ? "0" + hours : hours;
    hour_div.innerHTML = hours
    minutes = minutes % 60;
    minutes = minutes ? minutes : 0
    minutes = minutes < 10 ? "0" + minutes : minutes;
    minutes_div.innerHTML = minutes
    seconds = seconds % 60;
    seconds = seconds ? seconds : 0
    seconds = seconds < 10 ? "0" + seconds : seconds;
    seconds_div.innerHTML = seconds;
    toggled_div.classList.toggle("show")
}, 1000)