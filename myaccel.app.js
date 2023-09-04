/*
source: PROG3012/4473/IoT Programm - Module 5: IoT Device Interaction/Flow/Part 3: Node-RED + Bangle.js/Bangle.js Stream Accel
*/


let uCount = 0;
let connected = false;

Bangle.on('accel',function(accelObject){
  if(connected) {
    let dataPoint = [
        Math.round(accelObject.x * 100),
        Math.round(accelObject.y * 100),
        Math.round(accelObject.z * 100)
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