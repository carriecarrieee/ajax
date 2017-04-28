"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(results) {
    $.get('/fortune', function (results){
        var fortune = results;
        $('#fortune-text').html(fortune);
    });
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, replaceWeather); 
}

//this is all working - need to replace "test" with our weather
function replaceWeather(results) {
    var weather = results;
        $('#weather-info').html("test");
}

$("#weather-form").on('submit', showWeather);



// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


