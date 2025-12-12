// 7. The following DigitalClock class uses an interval to print the time every second once started, until stopped.

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date(); //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
    console.log("Clock stopped.");
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("My clock:");
// myClock.start(); // allows the clock to keep printing every second.

/* a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'.
This precision parameter should default to 1 second if not supplied. */

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);       // call parent constructor
    this.precision = precision; // store precision in ms
  }

  start() {
    console.log("Clock started.");
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const fastClock = new PrecisionClock("Fast Clock:", 200); // updates every 200ms
fastClock.start();
setTimeout(() => fastClock.stop(), 2000); // stop after 2s

/* b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. When the clock reaches this time,
it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied. */

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime; // string in "hh:mm" format
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

    // Check if wakeup time reached
    if (`${hours}:${mins}` === this.wakeupTime) {
      console.log("Wake Up!");
      this.stop();
    }
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

// Test
const myAlarm = new AlarmClock("Alarm Clock:", "10:00"); // adjust to a near time to test
myAlarm.start();