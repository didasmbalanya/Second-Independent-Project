
var function triangleCalculator(){ 

	var sideA = document.getElementById("sideA").value();
	var sideB = document.getElementById("sideB").value();
	var sideC = document.getElementById("sideC").value();

	var triangleSides = [sideA,sideB,sideC]
	if (triangleSides[1] === triangleSides[2] && triangleSides[2] === triangleSides[3]){
		window.alert("Triangle is Equilateral")
	}
	else if (triangleSides[1] === triangleSides[2] && triangleSides[2] !== triangleSides[3]){
		window.alert("Triangle is Isoceles")
	}
	else if (triangleSides[1] !== triangleSides[2] && triangleSides[2] === triangleSides[3]){
		window.alert("Triangle is Isoceles")
	}
	else if (triangleSides[1] === triangleSides[3] && triangleSides[2] !== triangleSides[3]){
		window.alert("Triangle is Isoceles")
	}
	else if(triangleSides[1] !== triangleSides[3] && triangleSides[2] !== triangleSides[3] && triangleSides[1] !== triangleSides[2]){
		window.alert("Triangle is Isoceles")
	}
	else{
		window.alert("Cannot form a triangle")
	}

		};
		
