

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

//LED Matrix
board.on("ready", function() {

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
    }
  });

  this.repl.inject({
    matrix: matrix,
    // Type "hi()" in the REPL to
    // display a "hi"!
    hi: function() {
      matrix.draw(hi);
    }
  });

  this.repl.inject({
    matrix: matrix,
    // Type "moon()" in the REPL to
    // display a "hi"!
    moon: function() {
      matrix.draw(moon);
    });

});
