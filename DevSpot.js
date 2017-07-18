

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


var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe();
});
