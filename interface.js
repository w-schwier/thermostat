$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


  $('#temperature-increase').click(function() {
    thermostat.increase();
    updateTemperature();
  });

  $('#temperature-decrease').click(function(){
    thermostat.decrease();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#power-saving-mode').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving-mode').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
  };
});
