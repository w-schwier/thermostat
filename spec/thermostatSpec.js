'use strict';

describe('Thermostat', function() {
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  it('has starting temp of 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('temperature changes', function(){

    it('increase temperature', function() {
      thermostat.increase();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases temperature', function() {
      thermostat.decrease();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('temperature cannot be set below 10 degrees', function() {
      thermostat.temp = 10;
      thermostat.decrease();
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    // it('throws a message if target temperature is below 10 degrees', function(){
    //   console.log = jasmine.createSpy("log")
    //   thermostat.temp = 10;
    //   thermostat.decrease();
    //   expect(console.log).toHaveBeenCalledWith('Temperature has been set to the minimum of 10 degrees');
    // });
  });

  describe('powerSavingMode', function() {
    it('PSM is on by default', function () {
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('Sets max temp to 25 degrees when PSM is on', function() {
      thermostat.temp = 25;
      thermostat.increase();
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });

    it('Sets max temp to 32 degrees when PSM is off', function() {
      thermostat.powerSavingMode = false
      thermostat.temp = 32;
      thermostat.increase();
      expect(thermostat.getCurrentTemperature()).toEqual(32)
    });

    it('can be switched off', function(){
      thermostat.powerSavingModeOff();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it('can be switched on', function(){
      thermostat.powerSavingMode = false;
      thermostat.powerSavingModeOn();
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });

  describe('temperature reset', function(){
    it('resets to default of 20 degrees', function(){
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('current energy usage', function(){
    it('returns low-usage if temp < 18', function(){
      thermostat.decrease(5);
      expect(thermostat.currentEnergyUsage()).toBe("low-usage");
    });

    it('returns medium-usage if temp < 25', function(){
      expect(thermostat.currentEnergyUsage()).toBe("medium-usage");
    });

    it('returns high-usage if temp > 25', function(){
      thermostat.powerSavingMode = false;
      thermostat.increase(8);
      expect(thermostat.currentEnergyUsage()).toBe("high-usage");
    });
  });
});
