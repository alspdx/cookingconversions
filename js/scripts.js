// Celsius to Fahrenheit
var celsiusToFahrenheit = function(celsius) {
	return celsius * 1.8 + 32;
}

var celsius = parseInt(prompt("Celsius"));
alert(celsiusToFahrenheit(celsius));

// Fahrenheit to Celsius
var fahrenheitToCelsius = function(fahrenheit) {
	return (fahrenheit - 32) /1.8 ;
}

var fahrenheit = parseInt(prompt("Fahrenheit"));
alert(fahrenheitToCelsius(fahrenheit));


// Gallons to Liters:
var gallonsToLiters = function(gallons) {
	return gallons * 0.264172051;
}

var gallons = parseInt(prompt("Gallons"));
alert(gallonsToLiters(gallons));



//Liters to Gallons:

var litersToGallons = function(liters) {
	return liters / 0.264172051;
}

var liters = parseInt(prompt("Liters"));
alert(litersToGallons(liters));

//Cups to Liters

var cupsToLiters = function(cups) {
	return cups * 0.236588;
}

var cups = parseInt(prompt("cups"));
alert(cupsToLiters(cups));

//Liters to cups

var litersToCups = function(liters) {
	return liters / 0.236588;
}

var liters = parseInt(prompt("Liters"));
alert(litersToCups(liters));

//Ounces to grams

var ouncesToGrams = function(ounces) {
	return ounces * 28.3495;
}

var ounces = parseInt(prompt("Ounces"));
alert(ouncesToGrams(ounces));

//Grams to ounces

var gramsToOunces = function(grams) {
	return grams / 28.3495;
}

var grams = parseInt(prompt("Grams"));
alert(gramsToOunces(grams));
