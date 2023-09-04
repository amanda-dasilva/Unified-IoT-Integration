/*
Author: Amanda da Silva
Title: PROG3012 - Final Project
Date: 2022/12/21
*/


const five = context.global.jfive;
const lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 16

});

let hrmObj = msg.payload.characteristics["92c1b5b8e8254938bbed672529103e56"].toString();
let hrmObj1 = hrmObj.replace("H,", " ");
let hrmObj2 = hrmObj1.replace(",0", " ");

let currTS = "";
let hrmBPMMsg = "BPM: " + hrmObj2.trim();
const hrmInfo = {};

console.log(hrmBPMMsg);
currTS = getCurrentTimestamp();
console.log(currTS);
lcd.clear().print("Current HRM Data");
lcd.cursor(1, 0);
lcd.print(hrmBPMMsg);
hrmInfo[hrmBPMMsg] = currTS;

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

return { payload: hrmInfo };