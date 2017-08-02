

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

    var nuvem = [
      "00100000",
      "01100000",
      "11111111",
      "01000110",
      "01001001",
      "01110000",
      "01100000",
      "10100000"
    ];

    var cloud = [
        "00000000",
        "00000000",
        "00011000",
        "00111100",
        "01111110",
        "01111110",
        "00111100",
        "00000000"
      ];

    var finger = [
          "11111111",
          "11110111",
          "11110111",
          "11100011",
          "11000011",
          "11000011",
          "11100011",
          "11110011"
        ];

    var Spiderman = [
            "01111110",
            "01111110",
            "01100110",
            "10100101",
            "10000001",
            "01000010",
            "01100110",
            "01111110"
            ];

    var clear = [
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
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

var msg = "    Hel lo Daniel ".split("");

// Display each letter for 1 second
function next() {
  var c;

  if (c = msg.shift()) {
    matrix.draw(c);
    setTimeout(next, 1000);
  }
}

function reDo() {
  setInterval(next, 20000);
}

//Motion Sensor

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
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    console.log("motionend");
    reDo();
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
    },
    nuvem: function() {
      matrix.draw(nuvem);
    },
    cloud: function() {
      matrix.draw(cloud);
    },
    finger: function() {
      matrix.draw(finger);
    },
    Spiderman: function() {
      matrix.draw(Spiderman);
    },
    clear: function() {
      matrix.draw(clear);
    }
  });

});
