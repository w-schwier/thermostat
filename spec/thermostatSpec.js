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
  });

});
