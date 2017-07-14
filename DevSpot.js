
//Find out how to build Drone-V1

//components : arduino board - wire board - 2 motors - 2 LED's
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
});
