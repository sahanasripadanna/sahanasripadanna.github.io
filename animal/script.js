var img = document.getElementsByTagName('img')[0]

var mustache = document.getElementsByTagName('img')[1]


function feed(event){
	var x = event.clientX;
	var y = event.clientY;

	//console.log(x)

	mustache.style.left = x + 'px';
	mustache.style.top = y + 'px';
}
