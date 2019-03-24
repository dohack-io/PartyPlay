// polyfill for Array.prototype.fill
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      var len = O.length >>> 0;

      var start = arguments[1];
      var relativeStart = start >> 0;

      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      while (k < final) {
        O[k] = value;
        k++;
      }

      return O;
    }
  });
}

let spi = require('spi');

class APA102 {
    constructor(count, spiOptions) {
        this.spi = new spi.SPI(spiOptions);
        this.leds = Array(count).fill([0x00, 0x00, 0x00]);
    }

    setLed(position, rgb) {
        if (position < this.leds.length && rgb.length == 3) {
            this.leds[position] = rgb;
        }
    }

    strobe() {
        // start frame: 32 0-bits
        var out = [0x00, 0x00, 0x00, 0x00];

        // colors in order brightness, B, G, R
        for(led of this.leds) {
            out.push(0xff, led[2], led[1], led[0]);
        }

        // end frame: at least n/2 1-bits
        let endLen = Math.ceil(this.leds.length / (2*8));
        let endFrame = Array(endLen).fill(0xff);
        out.push(...endFrame);

        this.spi.transfer(Buffer.from(out));
    }
    /*blink() {
      setInterval(turnOn, 500);
      setInterval(turnOff, 500);
      setInterval(turnOn, 500);
      setInterval(turnOff, 500);
      setInterval(turnOn, 500);
      setInterval(turnOff, 500);
      setInterval(turnOn, 500);

    }*/
}

let test = function() {
  let a = new APA102(5, {pinSCLK:7, pinMOSI:6});

  for (let i = 0; i < 5; i++) {
    a.setLed(i, [i/5*0xff, 0xff-(i/5*0xff), 0x00]);
  }

  a.strobe();
}

//test();

module.exports = {
    APA102,
    test
};


/*let colorNr = 601;
var turnOff = function () {
  let a = new APA102(5, {pinSCLK:7, pinMOSI:6});
  for (let i = 0; i < 24; i++) { // LED im Einsatz 
    a.setLed(i,[0,0,0]);
                
  }
  a.strobe();
}
var turnOn = function () {
  let a = new APA102(5, {pinSCLK:7, pinMOSI:6});
  for (let i = 0; i < 24; i++) { // LED im Einsatz 
    a.setLed(i,[colorNr*0xff, 0xff-(colorNr*0xff), colorNr*0xff]);
                
  }
a.strobe();
}*/