let user = prompt("Please enter your name ")
let username = document.querySelector('#myName')
let myHour = document.querySelector('#hour')
let myMinute = document.querySelector('#minute')
let mySecond = document.querySelector('#second')
let day = document.querySelector('#day')

username.innerHTML = `${user ? user : 'Please enter your name...'}`

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function showTime() {    
    let newDay = new Date();
    let hour = newDay.getHours();
    hour = hour <= 9 ? "0" + hour : hour;
    myHour.innerHTML = hour;
    let minute = newDay.getMinutes();
    minute = minute <= 9 ? "0" + minute : minute;
    myMinute.innerHTML = minute;
    let second = newDay.getSeconds();
    second = second <= 9 ? "0" + second : second;
    mySecond.innerHTML = second;
}

setInterval(showTime, 1000);

let dayToShow = new Date();
day.innerHTML = days[newDay.getDay()];