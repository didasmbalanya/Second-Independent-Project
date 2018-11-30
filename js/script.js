
var triangleCalculator = function(){ 

	var sideA = document.getElementById("sideA").value;
	var sideB = document.getElementById("sideB").value;
	var sideC = document.getElementById("sideC").value;

	if (sideA === sideB && sideB === sideC){
		alert("Equilateral")
	}
	else if(sideA !== sideB && sideB !== sideC && sideA !== sideC){
		alert("Scalene")
	}

		};
		
