var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var digits = new five.Led.Digits({
    controller: "HT16K33",
  });
  var proximity = new five.Proximity({
    controller: "MB1000",
    pin: "A4",
    freq: "2"
  });

  proximity.on("data", function() {
    digits.print(this.cm);
    console.log("Entfernung: ");
    console.log("  cm  : ", this.cm);
    console.log("-----------------");
  });
});

