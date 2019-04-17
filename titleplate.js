function randomColor(){

	return "rgb (" +

}

function titleplate(title){
	
	var width = 800;
	var length = title.length;
	var s = '';
	for (var i = 0; i < length; i++)
	{
		s += "<div style=width:" + (width/length) + "px;height:" + (width/length)
		+ "px;border-radius:5px;display:inline;" + "background-color:"
		+ randomColor() + ";transform:rotate(" + (Math.floor(Math.random() * 11)-5)
		+ ""
	}

}