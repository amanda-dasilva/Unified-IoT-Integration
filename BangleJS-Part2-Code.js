/*
Author: Amanda da Silva
Title: PROG3012 - Final Project
Date: 2022/12/21
Source:
PROG3012/4473/IoT Programm - Module 5: IoT Device Interaction/Flow/Part 3: Node-RED + Bangle.js/Bangle.js Stream Accel
PROG3012/4473/IoT Programm - Module 4: Emedded JavaScript for IoT/Part 2 - Interacting with Bangle.js Sensors/Bangle_SensorExamples

*/


let uCount = 0;
let connected = false;
Bangle.setHRMPower(1);

Bangle.on('HRM',function(hrmObj){
  if(connected) {
    let dataPoint = [
      "H",
      hrmObj.bpm,
      hrmObj.confidence
      ];
    NRF.updateServices({
      '92c1b5b8-e824-4938-bbed-672529103e56': {
        '92c1b5b8-e825-4938-bbed-672529103e56': {
          notify: true,
          value: dataPoint.join(",")
        }
      }
    });
    uCount++;
    if(uCount > 0 && uCount % 100 === 0)
    {
      E.showMessage("Update #: " + uCount,"Bluetooth Connection");
    }
  }
});


function onInit() {
  NRF.on('connect',function(){
    connected = true;
    E.showMessage("Connected..","Bluetooth Connection");

  });
  NRF.on('disconnect',function(){ connected = false; });
  NRF.setServices({
    '92c1b5b8-e824-4938-bbed-672529103e56': {
      '92c1b5b8-e825-4938-bbed-672529103e56': {
        notify: true,
        readable: true,
        broadcast: true,
        //value: "hello"
        value: "000,000,000"
      }
    }
  });
  E.showMessage("Waiting..","Bluetooth Connection");
}
onInit();