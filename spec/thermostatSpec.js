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

});
