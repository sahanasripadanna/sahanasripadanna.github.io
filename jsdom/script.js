
var sqbtn = document.getElementById('square-button');

sqbtn.addEventListener('click', function(){
	var num1 = document.getElementById('square-input').value;
	document.getElementById('solution').innerText = squareNumber(num1);
});

function squareNumber(num1){
	return("The result of squaring the number " + num1 +" is " + num1*num1 + ".");
}

var halfbtn = document.getElementById('half-button');
halfbtn.addEventListener('click', function(){
	var num2 = document.getElementById('half-input').value;
	document.getElementById('solution').innerText = halfNumber(num2);
});

function halfNumber(num2){
	return("Half of " + num2 + " is " + num2/2 + ".");

}

var percbtn = document.getElementById('percent-button');
percbtn.addEventListener('click', function(){
	var num3 = document.getElementById('percent1-input').value;
	var num4 = document.getElementById('percent2-input').value;
	document.getElementById('solution').innerText = percentOf(num3, num4);
});

function percentOf(num3, num4){
	return(num3 + " is " + (num3/num4)*100 +"% of " + num4 + ".");

}

var areabtn = document.getElementById('area-button');
areabtn.addEventListener('click', function(){
	var num5 = document.getElementById('area-input').value;
	document.getElementById('solution').innerText = areaOfCircle(num5);
});

function areaOfCircle(rad){
	var area = 2*rad*Math.PI;
	var roundy = Math.round(100*area)/100;
	return("The area for a circle with radius " + rad + " is " + roundy + ".");

}
