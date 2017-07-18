

       //////                           ///////                       //
      //    //                        //                          ////////
     //     //    /////   //    //   //_____     /////     ////     //
    //     //   //__ //   //   //         //   //    //  //   //   //
   //    //    //         //  //         //   //    //  //   //   //
  //////      //////       ///    ///////    ///////    ////     //
                                            //
                                           //

//Contains : List of requirements - Coding behind Drone-V1

//components : arduino board - wire board - 2 motors - 2 LED's

// When in test silence other commands i.e. LED Hello world = active, LED = disabled


//Johnny Five board setup
var five = require("johnny-five");
var board = new five.Board();

//Test code for Arduino : LED Hello world

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
});
