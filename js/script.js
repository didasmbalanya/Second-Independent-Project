
var triangleCalculator = function(){ 

	var sideA = document.getElementById("sideA").value;
	var sideB = document.getElementById("sideB").value;
	var sideC = document.getElementById("sideC").value;

	var triangleSides = [sideA,sideB,sideC]
	if (triangleSides[1] === triangleSides[2] && triangleSides[2] === triangleSides[3]){
		alert("Triangle is Equilateral")
	}
	else if (triangleSides[1] === triangleSides[2] && triangleSides[2] !== triangleSides[3]){
		alert("Triangle is Isoceles")
	}
	else if (triangleSides[1] !== triangleSides[2] && triangleSides[2] === triangleSides[3]){
		alert("Triangle is Isoceles")
	}
	else if (triangleSides[1] === triangleSides[3] && triangleSides[2] !== triangleSides[3]){
		alert("Triangle is Isoceles")
	}
	else if(triangleSides[1] !== triangleSides[3] && triangleSides[2] !== triangleSides[3] && triangleSides[1] !== triangleSides[2]){
		alert("Triangle is Isoceles")
	}
	else{
		alert("Cannot form a triangle")
	}

		};
		
