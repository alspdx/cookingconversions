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
