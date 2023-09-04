/*
Author: Amanda da Silva
Title: PROG3012 - Final Project
Date: 2022/12/16
*/


const five = context.global.jfive;
const led = new five.Led(13);

let myObject = msg.payload.characteristics["92c1b5b8e8254938bbed672529103e56"].toString();
myObject = parseInt(myObject);

let currTS = "";
let ledMessage = "";
const accelInfo = {};

if (Math.sign(myObject) == 1) {
    ledMessage = "Turn LED ON";
    console.log(ledMessage);
    currTS = getCurrentTimestamp();
    console.log(currTS);
    led.on();
    accelInfo[ledMessage] = currTS;
} else {
    ledMessage = "Turn LED OFF";
    console.log(ledMessage);
    currTS = getCurrentTimestamp();
    console.log(currTS);
    led.off();
    accelInfo[ledMessage] = currTS;
}

function getCurrentTimestamp() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    let hh = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let ampm = hh >= 12 ? 'pm' : 'am';
    hh = hh % 12;
    hh = hh ? hh : 12; // the hour '0' should be '12'
    mm = mm < 10 ? '0' + mm : mm;

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + sec + ampm;

    return formattedToday;
}

return { payload: accelInfo };