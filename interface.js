$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  displayWeather('London')


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
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
    $('#screen').attr('class', thermostat.getPSM());
  };

  function displayWeather(place) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + place;
    var token = '&appid=5152d585e0729b41957adadef190a691';
    var unit = '&units=metric';
    $.get(url + token + unit, function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#current-wind-speed').text(data.wind.speed);
    });
  };

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  });
});
