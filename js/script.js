
var triangleCalculator = function(){

	var sideA = parseFloat(document.getElementById("sideA").value);
	var sideB = parseFloat(document.getElementById("sideB").value);
	var sideC = parseFloat(document.getElementById("sideC").value);

	if ((sideA + sideB > sideC) && (sideB + sideC > sideA) && (sideA + sideC > sideB)){
		if (sideA == sideB && sideB == sideC){
			alert("Eqiulateral")
		}
		else if(sideA == sideB || sideB == sideC || sideA == sideC){
			alert("Isoceles")
		}
		else{
			alert("scalene")
		}
	}
	else{
		alert("Cannot form a triangle")
		}
	};
		
