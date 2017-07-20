

       //////                           ///////                       //
      //    //                        //                          ////////
     //     //    /////   //    //   //_____     /////     ////     //
    //     //   //__ //   //   //         //   //    //  //   //   //
   //    //    //         //  //         //   //    //  //   //   //
  //////      //////       ///    ///////    ///////    ////     //
                                            //
                                           //

//Contains : List of requirements - Coding behind Drone-V1

//components : arduino board - LED Matrix - Motion sensor

// Board setup
var five = require("johnny-five");
var board = new five.Board();

//LED Matrix
board.on("ready", function() {


  //  List of objects for Matrix


    var heart = [
      "01100110",
      "10011001",
      "10000001",
      "10000001",
      "01000010",
      "00100100",
      "00011000",
      "00000000"
    ];

    var hi = [
      "10010000",
      "10010010",
      "11110000",
      "10010010",
      "10010010",
      "00000000",
      "00000000",
      "00000000"
    ];

    var moon = [
      "00000000",
      "00011000",
      "00001100",
      "00001100",
      "00011000",
      "00000000",
      "11111111",
      "00011000"
    ];

    var smiley = [
      "00000000",
      "00100100",
      "00100100",
      "00000000",
      "01000010",
      "01000010",
      "00111100",
      "00000000"
    ];

    var matrix = new five.Led.Matrix({
      pins: {
        data: 2,
        clock: 4,
        cs: 3
      }
    });

matrix.on();

var msg = "Hel lo Daniel ".split("");

// Display each letter for 1 second
function next() {
  var c;

  if (c = msg.shift()) {
    matrix.draw(c);
    setTimeout(next, 900);
  }
}

  // Create a new `motion` hardware instance.
  var motion = new five.Motion(7);

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    console.log("motionstart");
    next();
    matrix.draw(smiley)
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    console.log("motionend");
  });

  // "data" events are fired at the interval set in opts.freq
  // or every 25ms. Uncomment the following to see all
  // motion detection readings.
  // motion.on("data", function(data) {
  //   console.log(data);
  // });



  this.repl.inject({
    matrix: matrix,
    // Type "heart()" in the REPL to
    // display a heart!
    heart: function() {
      matrix.draw(heart);
    },
    hi: function() {
      matrix.draw(hi);
    },
    moon: function() {
      matrix.draw(moon);
    },
    smiley: function() {
      matrix.draw(smiley);
    }
  });

});
