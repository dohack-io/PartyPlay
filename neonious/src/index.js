/*
 * neonious one example program
 *
 * Written by neonious, modify as you wish.
 */

let http = require('http');
let fs = require('fs');
let gpio = require('gpio');
let leds = require('./apa102.js');

let ledLeuchte = new leds.APA102(24, {pinSCLK:6, pinMOSI:7});

// Just thrown in to show how to detect a button press
// Note: This is for the left button, the right button is reset!
gpio.pins[gpio.BUTTON].on('fall', () => {
    console.log('Button pressed!')
});

function writeStatic(path, res) {
    fs.readFile('/www/' + path, (err, data) => {
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('fs.readFile error: ' + err);
            return;
        }

        let contentType = 'text/html';
        if (path.substr(-4) == '.png')
            contentType = 'image/png';
        else if (path.substr(-3) == '.js')
            contentType = 'text/javascript';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

let ledRedState = false, ledGreenState = false;

let delay = function(t) {//für Blink
    return new Promise((resolve, reject) => setTimeout(resolve, t))
};
//let colorNr = 601;
var turnOff = function () {
    for (let i = 0; i < 24; i++) { // LED im Einsatz 
        ledLeuchte.setLed(i,[0,0,0]);
                
    }
    ledLeuchte.strobe();
}
var turnOn = function (colNr, r,g,b) {
    for (let i = 0; i < 24; i++) { // LED im Einsatz 
        ledLeuchte.setLed(i,[r*colNr*0xff, 0xff-(g*colNr*0xff), b*colNr*0xff]);
                
    }
    ledLeuchte.strobe();
}

let blink = function(colorNr, mSk, rot,gruen,blau) {

    delay(mSk)
        .then(turnOff())
        .then(() => delay(mSk)
            .then(turnOn(colorNr,rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+100,rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+200,rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+300, rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+400, rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+500, rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+600, rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+100,rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+200,rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+300, rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+400, rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+500, rot,gruen,blau)))
        .then(() => delay(mSk)
            .then(turnOff()))
        .then(() => delay(mSk)
            .then(turnOn(colorNr+600, rot,gruen,blau)));
        
}


http.createServer(function (req, res) {
    // Callbacks
    if (req.url == '/ToggleGreen') {
        res.end();
        console.log("Toggling green LED");
        ledGreenState = !ledGreenState;
        gpio.pins[gpio.LED_GREEN].setValue(ledGreenState);
        
       
        var rr = Math.random([0,1]) ;
        var gg = Math.random([0,1]) ;
        var bb = Math.random([0,1]) ;
        for (let j = 0; j < 2; j++) {
            blink(j+10, 200,rr,gg,bb);
        }
        
        
        /*for (let i = 0; i < 24; i++) { // LED im Einsatz 
            if (ledGreenState){
                ledLeuchte.setLed(i, [2*0xff, 0xff-(33*0xff), 44*0xff]);
            }
            else
                ledLeuchte.setLed(i,[0,0,0]);
        }

        

      
        ledLeuchte.strobe();*/

    } else if (req.url == '/ToggleRed') {
        res.end();
        console.log("Toggling red LED");
        ledRedState = !ledRedState;
        gpio.pins[gpio.LED_RED].setValue(ledRedState);
    } else {
        writeStatic(req.url == '/' ? '/index.html' : req.url, res);
    }
}).listen(80);

console.log("Web server running!");


