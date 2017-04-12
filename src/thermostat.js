'use strict';

function Thermostat() {
  this.MININUM_TEMPERATURE = 10;
  this.temp = 20;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temp;
};

Thermostat.prototype.increase = function() {
  if(this.isMaximumTemperature()){
    return;
  }
  this.temp += 1;
};

Thermostat.prototype.decrease = function() {
  if(this.isMinimumTemperature()) {
    return;
    // return console.log('Temperature has been set to the minimum of 10 degrees');
  }
  this.temp -= 1;
};

Thermostat.prototype.powerSavingModeOff = function () {
  this.powerSavingMode = false
};

Thermostat.prototype.powerSavingModeOn = function () {
  this.powerSavingMode = true
};

Thermostat.prototype.reset = function () {
  this.temp = 20;
};

<<<<<<< HEAD
Thermostat.prototype.isMinimumTemperature = function() {
  return this.temp === this.MININUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSavingMode) {
    return this.temp === this.MAX_LIMIT_PSM_ON;
  }
  return this.temp === this.MAX_LIMIT_PSM_OFF;
}
=======
Thermostat.prototype.currentEnergyUsage = function () {
  if (this.temp < 18) {
    return "low-usage";
  } else if(this.temp < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  };
};
>>>>>>> 9fda4a0af68f3518aabc9d6b32e3797600636497
