
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
console.log(hour);
console.log(minute);
console.log(second);

 function updateTime(){
    let date = new Date();
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    hrRotation = 30*hr + min/2 + sec/120;
    minRotation = 6*min + sec/10;
    secRotation = 6*sec;

    hour.style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;


 }

setInterval(updateTime, 1000);