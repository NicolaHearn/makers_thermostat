class Thermostat {
  constructor() {
    this.currentTemp = 20;
    this.minTemp = 10;
    this.powerMode = true;
    this.maxTemp = 25;
  }

  up(num = 1) {
    const newTemp = this.currentTemp += num;
    if (newTemp < this.maxTemp) {
      newTemp;
    } else {
      this.currentTemp = this.maxTemp;
    }
  }

  down(num = 1) {
    const newTemp = this.currentTemp -= num;
    if (newTemp > this.minTemp) {
      newTemp;
    } else {
      this.currentTemp = this.minTemp;
    }
  }

  powerModeOff() {
    this.powerMode = false;
    this.maxTemp = 32;
  }

  powerModeOn() {
    this.powerMode = true;
    this.maxTemp = 25;
    // if (this.currentTemp > this.maxTemp) {
    //   this.currentTemp = 25;
    // }
  }

  reset() {
    this.currentTemp = 20;
  }

  currentUsage() {
    if (this.currentTemp < 18) {
      return "current energy usage is LOW"
    } else if (this.currentTemp <= 25) {
      return "current energy usage is MEDIUM"
    } else {
      return "current energy usage is HIGH"
    }
  }

}

module.exports = Thermostat;