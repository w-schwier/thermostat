'use strict';

describe('Thermostat', function() {
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  it('has starting temp of 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  describe('temperature changes', function(){

    it('increase temperature', function() {
      thermostat.increase(4);
      expect(thermostat.temp).toEqual(24);
    });

    it('decreases temprature', function() {
      thermostat.decrease(4);
      expect(thermostat.temp).toEqual(16);
    });

    it('temperature cannot be set below 10 degrees', function() {
      thermostat.decrease(11);
      expect(thermostat.temp).toEqual(10);
    });

    it('throws a message if target temperature is below 10 degrees', function(){
      console.log = jasmine.createSpy("log")
      thermostat.decrease(11);
      expect(console.log).toHaveBeenCalledWith('Temperature has been set to the minimum of 10 degrees');
    });
  });

  describe('powerSavingMode', function() {
    it('PSM is on by default', function () {
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('Sets max temp to 25 degrees when PSM is on', function() {
      thermostat.increase(30)
      expect(thermostat.temp).toEqual(25)
    });

    it('Sets max temp to 32 degrees when PSM is off', function() {
      thermostat.powerSavingMode = false
      thermostat.increase(100)
      expect(thermostat.temp).toEqual(32)
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
      expect(thermostat.temp).toEqual(20);
    });
  });
});
