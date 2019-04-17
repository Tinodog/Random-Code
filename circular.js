function circular (text, radius, fs){
	
	var s = "";
	for (var i = 0; i < text.length; i++){

		s += "<div style=\"width:" + (2 * radius) + "px;height:"
		+ (2 * radius) + "px;border-radius:" + radius + "px;font-size:"
		+ fs + "px;text-align:center;"
		+ "vertical-align:top;line-height:"
		+ (2 * radius) + "px;transform:rotate("
		+ (fs * 180/3.14159265/radius) + "deg) ;color:black;display:inline-block;\">" +text.charAt(i);
		"margin:0px 0px 0px -" + (i == 0?0:(2 * radius)) + "px\">" "</div>";

		}

}

document.write(circular("Something Really Cool", 100, 20));