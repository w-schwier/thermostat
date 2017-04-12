'use strict';

function Thermostat() {
  this.temp = 20
}

Thermostat.prototype.increase = function (degrees) {
  this.temp += degrees;
};
