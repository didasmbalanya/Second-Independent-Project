
var triangleCalculator = function(){

	var sideA = document.getElementById("sideA").value;
	var sideB = document.getElementById("sideB").value;
	var sideC = document.getElementById("sideC").value;

	if(sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB){
		alert("cannot form a triangle")
	}
	else if (sideA === sideB && sideB === sideC){
		alert("Equilateral")
	}
	else if(sideA !== sideB && sideB !== sideC && sideA !== sideC){
		alert("Scalene")
	}
	else if (sideA === sideB && sideB !== sideC){
		alert("Isoceles")
	}
	else if(sideA !== sideB && sideB === sideC){
		alert("Isoceles")
	}
	else if(sideA === sideC && sideC !== sideB){
		alert("Isoceles")
	}
	else {
		alert("Not a triangle")
	}

		};
		
