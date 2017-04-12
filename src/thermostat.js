'use strict';

function Thermostat() {
  this.temp = 20
  this.powerSavingMode = true
}

Thermostat.prototype.increase = function(degrees) {
  if(this.powerSavingMode){
    if((this.temp + degrees) > 25) {
      this.temp = 25;
    } else {
      this.temp += degrees;
    };
  } else {
    if((this.temp + degrees) > 32) {
      this.temp = 32;
    } else {
      this.temp += degrees;
    };
  };
};

Thermostat.prototype.decrease = function(degrees) {
  if((this.temp - degrees) < 10) {
    this.temp = 10;
    return console.log('Temperature has been set to the minimum of 10 degrees');
  } else {
    this.temp -= degrees;
  };
};
