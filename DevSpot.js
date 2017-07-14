

       //////                          ////////                       //
      //    //                        //                          ////////
     //     //   ///////  //    //   //_____     /////     ////     //
    //     //   //__ //   //   //         //   //   //   //   //   //
   //    //    //         //  //         //   //    //  //   //   //
  //////      //////       ///    ////////   ///////     ////    //
                                                //
                                               //

//Find out how to build Drone-V1

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


//Test code for Arduino : LED
board.on("ready", function() {
  var led = new five.Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });

  led.blink();
});
