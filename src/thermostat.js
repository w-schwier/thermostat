'use strict';

function Thermostat() {
  this.temp = 20
}

Thermostat.prototype.increase = function (degrees) {
  this.temp += degrees;
};

Thermostat.prototype.decrease = function (degrees) {
  if((this.temp - degrees) < 10) {
    this.temp = 10;
    return console.log('Temperature has been set to the minimum of 10 degrees');
  } else {
    this.temp -= degrees;
  };
};
