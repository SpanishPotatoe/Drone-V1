

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

//List of objects for Matrix


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


  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 4,
      cs: 3
    }
  });

  matrix.on();

  var msg = "Hel lo Daniel".split("");

  // Display each letter for 1 second
  function next() {
    var c;

    if (c = msg.shift()) {
      matrix.draw(c);
      setTimeout(next, 1000);
    }
  }

  next();

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
    }
  });

});
