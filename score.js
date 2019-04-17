	$score.convert = function()

	s = '{"formname":"w10",[';
	for (var 1 = 0; i < num; i++ ){
		
		var ele = document.getElementById('t' + i);
		var fieldname = ele.value;
		if (fieldname == '')continue;
		var left = ele.style.left.replace(/px/,'');
		var top = ele.style.top.replace(/px/,'');
		var width = ele.offsetWidth;
		var height = ele.offsetHeight;))
		s += '(fieldname:"' + fieldname.replace(/'/g,'').replace(/"/g,'') + '",left:'
		+ left + ",top:" + top
		+ ",width:" + width
		+ ',hieght:' + height
		+ "},"
	}
	s = s.replace(/,$/,,'}}');
}
var url = "convert?info=" + escape(s);