// Part 3 of Exercise 7

class Logger {
  constructor(id) {
    this.id = id || Math.random().toString(36).slice(2, 8);
  }

  log(message) {
    console.log(`[Logger ${this.id}]: ${message}`);
  }

  info(message) {
    this.log(`INFO: ${message}`);
  }

  error(message) {
    this.log(`ERROR: ${message}`);
  }
}

module.exports = Logger;