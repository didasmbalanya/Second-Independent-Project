
var triangleCalculator(function(side1,side2,side3){

	var triangleSides = [sideA,sideB,sideC]
	if (triangleSides[1] === triangleSides[2] && triangleSides[2] === triangleSides[3]){
		console.log("Triangle is Equilateral")
	}
	else if (triangleSides[1] === triangleSides[2] && triangleSides[2] !== triangleSides[3]){
		console.log("Triangle is Isoceles")
	}
	else if (triangleSides[1] !== triangleSides[2] && triangleSides[2] === triangleSides[3]){
		console.log("Triangle is Isoceles")
	}
	else if (triangleSides[1] === triangleSides[3] && triangleSides[2] !== triangleSides[3]){
		console.log("Triangle is Isoceles")
	}
	else if(triangleSides[1] !== triangleSides[3] && triangleSides[2] !== triangleSides[3] && triangleSides[1] !== triangleSides[2]){
		console.log("Triangle is Isoceles")
	}
	else{
		console.log("Cannot form a triangle")
	}

		});

function triangleCalculator() {
    document.getElementById("calc").submit();