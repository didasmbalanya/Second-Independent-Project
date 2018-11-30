sideA = prompt("Enter side of 1 of triangle: ")
sideB = prompt("Enter side of 2 of triangle: ")
sideC = prompt("Enter side of 3 of triangle: ")

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
