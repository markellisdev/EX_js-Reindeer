
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");


for (var i = 0; i < reindeer.length; i++) {
	var test = (reindeer[i] + " " + colors[i]);

	console.log(coloredReindeer);

	coloredReindeer.innerHTML += test + "<br>";
}



