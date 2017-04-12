'use strict';

function Thermostat() {
  this.MININUM_TEMPERATURE = 10;
  this.temp = 20;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.DEFAULT_TEMP = 20;
  this.LOW_ENERGY_USAGE_LIMIT = 18;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 25;
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
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temp === this.MININUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSavingMode) {
    return this.temp === this.MAX_LIMIT_PSM_ON;
  }
  return this.temp === this.MAX_LIMIT_PSM_OFF;
}

Thermostat.prototype.currentEnergyUsage = function () {
  if (this.temp < this.LOW_ENERGY_USAGE_LIMIT) {
    return "low-usage";
  } else if(this.temp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "medium-usage";
  } else {
    return "high-usage";
  };
};
