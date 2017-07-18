

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

// Board setup
var five = require("johnny-five");
var board = new five.Board();


// LED pulse function
board.on("ready", function() {
  var array = new five.Leds([3, 5]);

  array.pulse();
});

// LED REPL commands

board.on("ready", function() {
  console.log("Ready event. Repl instance auto-initialized!");

  var led = new five.Led(13);

  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on: function() {
      led.on();
    },
    off: function() {
      led.off();
    }
  });
});
