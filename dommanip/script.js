
document.getElementById('div1').style.backgroundColor = "pink";

document.getElementById('div2').style.backgroundColor = "aqua";

function getHeaders(){

	var headers = document.getElementsByTagName('h3');
	alert("there are "  + headers.length + " h3 tags in this document")
}

function hGreeting(){
	var div1 = document.querySelector('#div1');
	var headers = div1.getElementsByTagName('h3');
	alert("there are "  + headers.length + " h greetings in this division");
}

function wGreeting(){
	var div2 = document.querySelector('#div2');
	var headers = div2.getElementsByTagName('h3');
	alert("there are "  + headers.length + " w greetings in this division");
}
