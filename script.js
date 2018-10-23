
// ----- Seletors
var gradientOutput = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyCSS = document.querySelector("body");
var btnGenerator = document.querySelector("button");
var selDir = document.querySelector("select");

// ----- Funtions


// -- Changes CSS Gradient and shows it in H3
function changeGradient(col1, col2, dir) {
	checkInput();
	bodyCSS.style.background = "linear-gradient(" + dir + "," + col1 + "," + col2 +")";
	gradientOutput.textContent =  bodyCSS.style.background + ";";

}

// -- Returns Random Numbers - RGB Colors (0-255)
function getRandom() {
	return Math.floor((Math.random() * 255));
}

// -- Puts the Random Generated Color together and calls changeGradient
function genGradient() {
	var col1 = "rgb(" + getRandom() + "," + getRandom() + "," + getRandom() + ")";
	var col2 = "rgb(" + getRandom() + "," + getRandom() + "," + getRandom() + ")";
	changeGradient(col1, col2, selDir.value);

	
}


// -- Replaces the H3 with an Read-Only Text Input (when user clicks on H3)
function convInput() {
	var textH3 = gradientOutput.textContent;
	var inputGradient = document.createElement("input");
	inputGradient.setAttribute("type", "text");
	inputGradient.readOnly = true;
	inputGradient.value = textH3;
	bodyCSS.insertBefore(inputGradient, btnGenerator);
	bodyCSS.removeChild(gradientOutput);
	inputGradient.select();


}

// -- Checks if there is an Input tag and replaces it with the default H3 (when clicking buttons or changing select)
function checkInput() {
	if (btnGenerator.previousElementSibling.tagName ==="INPUT") {
		var inputGradient = btnGenerator.previousElementSibling;
		bodyCSS.insertBefore(gradientOutput, btnGenerator);
		bodyCSS.removeChild(inputGradient);

	}	

}

// ----- Calls onLoad and changes Gradient and shows H3
changeGradient(color1.value, color2.value, selDir.value);


// ----- Events
color1.addEventListener("input", function() {
	changeGradient(color1.value, color2.value, selDir.value)
}); 
color2.addEventListener("input", function() {
	changeGradient(color1.value, color2.value, selDir.value)
});
btnGenerator.addEventListener("click", genGradient);
gradientOutput.addEventListener("click", convInput);
selDir.addEventListener("change", function() {
	changeGradient(color1.value, color2.value, selDir.value)
});



