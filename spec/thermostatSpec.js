'use strict';

describe('Thermostat', function() {
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  it('has starting temp of 20 degrees', function() {
    expect(thermostat.temp).toEqual(20)
  });
});
