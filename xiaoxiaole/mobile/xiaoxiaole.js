gamestart=function(){
    location.href='index_content.html';
}

setheight=function(){
    var noHeight=$("#conten").width();
    $("#conten").css("height",noHeight);
    var imgWidth=noHeight/10-2;
    $(".plotstyle").css("height",imgWidth);
    $(".plotstyle").css("width",imgWidth);
    origan(imgWidth);
    fill();

    
	$("img").on('click', function(e) {
		var x = $(this).attr("id");
		light(x);
		exchange(x);
	});
}

draw21=function (id,path) {
    var canvas = document.getElementById(id)
	if (canvas == null) {
		return false;
	}	
	var context = canvas.getContext("2d");	
	context.clearRect(0,0,160,160);
	var img = new Image();
	img.src = path ;
	context.drawImage(img, 0, 0);
};

$(document).ready(function() {
	var list = [];
	var point = 0;
	var walk = 10;
	var level=0;
	var startlevelpoint=500;
    gotonextlevel();
	self.setInterval("evalue()", 3000);
	origan();
	if(level==0){
      fill();
	}
	if(level==1){
      fillup1();
	}
	if(level==2){
      fillup2();
	}
	

	evalue = function() {
		$("#conmment").empty();
	}

	light = function(a) {
		var x = $("#" + a).css("opacity");
		if (x == 1) {
			$("#" + a).css("opacity", "0.3");
		}
	}									

	recover = function(a, b) {
		var x = $("#" + a).css("opacity");
		var y = $("#" + b).css("opacity");
		if (x == 0.3) {
			$("#" + a).animate({
				opacity : '1',
			});
		}
		if (y == 0.3) {
			$("#" + b).animate({
				opacity : '1',
			});
		}
	}

	first = function() {
		for (var i = 1; i < 101; i++) {
			deale(i);
		}
	}

	down = function() {
		var istrue = 0;
		for (var i = 1; i < 101; i++) {
			if (i + 10 < 101) {
				var sub = i + 10;
				var x = $("#" + sub).attr("src");
				var y = $("#" + i).attr("src");
				if (x == '') {
					var temp = x;
					x = y;
					y = temp;
					document.getElementById("" + sub).src = x;
					document.getElementById("" + i).src = y;
					istrue = 1;
					changeOpacANDColor(i,sub);																	
				}
				if (istrue == 1) {
					if (i - 10 > 0) {
						for (var j = 1; j < i / 10; j++) {
							var b = i - 10 * j;
							var sub = b + 10;
							var x = $("#" + sub).attr("src");
							var y = $("#" + b).attr("src");
							if (x == '') {
								var temp = x;
								x = y;
								y = temp;
								document.getElementById(""+ sub).src = x;
								document.getElementById("" + b).src = y;
								changeOpacANDColor(b,sub);
							}

						}
						istrue = 0;
					}
				}
			}
		}
		if(level==0){
			setTimeout("fill()", 1000);
		}
		if(level==1){
     	 setTimeout("fillup1()", 1000);
		}	
		if(level==2){
     	 setTimeout("fillup2()", 1000);
		}	
	}
	changeOpacANDColor=function(a,b){
		var k = $("#" + a).css("opacity");
		var q = $("#" + b).css("opacity");
		var opacTemp=k;
		k=q;
		q=opacTemp;									
		$("#" + a).css("opacity", k);
		$("#" + b).css("opacity", q);	
		var m = $("#" + a).css("background-color");
		var n = $("#" + b).css("background-color");
		var colorTemp=m;
		m=n;
		n=colorTemp;									
		$("#" + b).css("background-color",n);
		$("#" + a).css("background-color", m);
	}

	exchange = function(a) {

		list.push(a);
		if (list.length == 2 && list[0] != list[1]) {
			var a = parseInt(list[0]);
			var b = parseInt(list[1]);
			if (Math.abs(a - b) == 1 || Math.abs(a - b) == 10) {
				var opa=$("#" + a).css("opacity");
				var opb=$("#" + b).css("opacity");
				if(opa==0.2){
					if(opb==0.2){
						destoryAll();
					}
					else{
						cleanb(b);
					}
				}
				else{
					if(opb==0.2){
						cleanb(a);
					}
					else{
						changeOpacANDColor(a,b);															
						var x = $("#" + a).attr("src");
						var y = $("#" + b).attr("src");
						var temp = x;
						x = y;
						y = temp;
						document.getElementById("" + a).src = x;
						document.getElementById("" + b).src = y;
						disappear(a, b);
					}
				}								
			}
			recover(list[0], list[1]);
			list.length = 0;
			walk--;
			if (walk > -1) {
				//$("#walk").html('<p style="font-weight: bold;float:right;">'+ '步数：' + walk + '步' + '</p>');
			}

		}
		if (list[0] == list[1]) {
			list.length = 0;
		}
	}
	
	cleanb=function(b){
		var y = $("#" + b).attr("src");
		for(var i=1;i<101;i++){
			var x = $("#" + i).attr("src");
			if(x==y){
				clean(i);
			}
		}
		down();
	};
	
    destoryAll=function(){
    	for(var i=1;i<101;i++){
    		clean(i);
    	}
    	if(level==0){
			fill();
    	}
    	if(level==1){
     	    fillup1();
		}
		if(level==2){
     	    fillup2();
		}	   	
    };
    
	disappear = function(a, b) {
		if (a > b) {
			change(a, b);
		} else {
			change(b, a);
		}
	};

	remove = function(list) {
		var startpoint = 1000;
		var star = '★';
		for (var k = 0; k < list.length; k++) {
			var x = $("#" + list[k]).css("opacity");
			var y = $("#" + list[k]).css("background-color");
			if (x == 0.5 && y == "rgb(255, 0, 0)") {
				var a = parseInt(list[k]);
				var i = 1
				while (a - 10 * i > 0) {
					i++;
				}
				i--
				for (var b = 1; b < 11; b++) {
					var c = 10 * i + b;
					clean(c);
				}
				var t=$("#" + a).attr("src");
				draw21("can",t);
			} else if (x == 0.5 && y == "rgb(255, 255, 0)") {
				var a = parseInt(list[k]);
				var i = a % 10;

				for (var b = 0; b < 10; b++) {
					var c = 10 * b + i;
					clean(c);
				}
				var t=$("#" + a).attr("src");
				draw21("can",t);
			}
		}
		if (list.length == 3) {
			var t=$("#" + list[0]).attr("src");
			draw21("can",t);
			for (var i = 0; i < list.length; i++) {
				clean(list[i]);
				point += 10;
			}
			$("#" + list[0]).css("background-color", "");			
		}
		if (list.length == 4) {
			var t=$("#" + list[0]).attr("src");
			draw21("can",t);
			for (var i = 1; i < list.length; i++) {
				clean(list[i]);
				point += 20;
			}
			$("#" + list[0]).css("opacity", "0.5");			
		}
		//追加全屏消灭功能
		if (list.length == 5) {
			var t=$("#" + list[0]).attr("src");
			draw21("can",t);
			for (var i = 1; i < list.length; i++) {
				clean(list[i]);
				point += 20;
			}
			$("#" + list[0]).css("opacity", "0.2");
			walk+=1;			
		}

		$("#conmment").html('<div class="fontstyle">' + '你好棒哦!!!'+ '</div>');
		$("#point").html('<div class="pointposition">' + '分数：'+ point + '</div>');

		while (point >= startpoint) {
			$("#star").html('<div class="pointposition">'+star+ '</div>');
			startpoint += 1000;
			star += '★';
			if (star == '★★★★') {
				star = '☾';
			}
		}
		if(point>=startlevelpoint){
			level+=1;
			startlevelpoint+=2000;
			huanyou(level);
		}
		if (walk == 1) {
			if(point>=1000){
				$("#walk").html('<div style="font-weight: bold;">'+ '恭喜你进入下一关！！' + '</div>');
				location.href='level2/level2.html';
			}
			else{
				setTimeout("location.reload()", 2000);  
			}			
		}
		setTimeout(" down()", 1000);
	};

	huanyou=function(level){
		var src='';
		if(level==1){
			src='pic/5.jpg';
		}
		if(level==2){
			src='pic/6.jpg';
		}
		$("#huanyou").html('<img id="you" width="80" height="80" src='+src+'>')
		$("#huanyou").css("display","block");
		$("#jiesuo").html('新的小动物解锁了！请继续加油哦！！')
		$("#jiesuo").show();
		for(var i=0;i<5;i++){
			move();
		}		
		$("#huanyou").hide();
		$("#jiesuo").hide();
	}

	move=function(){
		$("#huanyou").animate({
			left:"+50",
		});
	}

	clean=function(c){
		document.getElementById("" + c).src ='';
		$("#" + c).css("background-color", "");
		$("#" + c).css("opacity", "1");
	};
	
	deala = function(a) {
		var x = $("#" + a).attr("src");
		var ahList = [];
		var asList = [];
		var isExit = 1;
		var isExit1 = 1;
		var isExit2 = 1;
		ahList.push(a.toString());
		asList.push(a.toString());
		for (var i = 1; i < 5; i++) {
			if (isExit == 1) {
				if (a % 10 == 0) {
					b = 10;
				} else {
					b = a % 10;
				}
				if (b - i > 0) {
					var sub = a - i;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						ahList.push(sub.toString());
					} else {
						isExit = 0;
					}
				}
			}
			if (isExit1 == 1) {
				if (a % 10 == 0) {
					b = 10;
				} else {
					b = a % 10;
				}
				if (b + i < 11) {
					var sub = a + i;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						ahList.push(sub.toString());
					} else {
						isExit1 = 0;
					}
				}
			}
			if (isExit2 == 1) {
				if (a + i * 10 < 101) {
					var sub = a + i * 10;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						asList.push(sub.toString());
					} else {
						isExit2 = 0;
					}
				}
			}
		}
		if (ahList.length > 2) {
			remove(ahList);
		}
		if (asList.length > 2) {
			remove(asList);
		}
	}

	dealb = function(a) {
		var x = $("#" + a).attr("src");
		var ahList = [];
		var asList = [];
		var isExit = 1;
		var isExit1 = 1;
		var isExit2 = 1;
		ahList.push(a.toString());
		asList.push(a.toString().toString());
		for (var i = 1; i < 5; i++) {
			if (isExit == 1) {
				if (a % 10 == 0) {
					b = 10;
				} else {
					b = a % 10;
				}
				if (b - i > 0) {
					var sub = a - i;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						ahList.push(sub.toString());
					} else {
						isExit = 0;
					}
				}
			}
			if (isExit1 == 1) {
				if (a % 10 == 0) {
					b = 10;
				} else {
					b = a % 10;
				}
				if (b + i < 11) {
					var sub = a + i;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						ahList.push(sub.toString());
					} else {
						isExit1 = 0;
					}
				}
			}
			if (isExit2 == 1) {
				if (a - i * 10 > 0) {
					var sub = a - i * 10;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						asList.push(sub.toString());
					} else {
						isExit2 = 0;
					}
				}
			}
		}
		if (ahList.length > 2) {
			remove(ahList);
		}
		if (asList.length > 2) {
			remove(asList);
		}
	}

	change = function(a, b) {
		if (a - b > 1) {
			$("#" + a).css("background-color", "yellow");
			$("#" + b).css("background-color", "yellow");
			deala(a);
			dealb(b);
		} else if (a - b == 1) {
			$("#" + a).css("background-color", "red");
			$("#" + b).css("background-color", "red");
			dealc(a);
			deald(b);
		}
	}

	dealc = function(a) {
		var x = $("#" + a).attr("src");
		var ahList = [];
		var asList = [];
		var isExit = 1;
		var isExit1 = 1;
		var isExit2 = 1;
		ahList.push(a.toString());
		asList.push(a.toString());
		for (var i = 1; i < 5; i++) {
			if (isExit == 1) {
				if (a + 10 * i < 101) {
					sub = a + i * 10;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						asList.push(sub.toString());
					} else {
						isExit = 0;
					}
				}
			}
			if (isExit1 == 1) {
				if (a % 10 == 0) {
					b = 10;
				} else {
					b = a % 10;
				}
				if (b + i < 11) {
					sub = a + i;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						ahList.push(sub.toString());
					} else {
						isExit1 = 0;
					}
				}
			}
			if (isExit2 == 1) {
				if (a - i * 10 > 0) {
					sub = a - i * 10;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						asList.push(sub.toString());
					} else {
						isExit2 = 0;
					}
				}
			}
		}
		if (ahList.length > 2) {
			remove(ahList);
		}
		if (asList.length > 2) {
			remove(asList);
		}
	}

	deald = function(a) {
		var x = $("#" + a).attr("src");
		var ahList = [];
		var asList = [];
		var isExit = 1;
		var isExit1 = 1;
		var isExit2 = 1;
		ahList.push(a.toString());
		asList.push(a.toString());
		for (var i = 1; i < 5; i++) {
			if (isExit == 1) {
				if (a % 10 == 0) {
					b = 10;
				} else {
					b = a % 10;
				}
				if (b - i > 0) {
					var sub = a - i;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						ahList.push(sub.toString());
					} else {
						isExit = 0;
					}
				}
			}
			if (isExit1 == 1) {
				if (a + i * 10 < 101) {
					var sub = a + i * 10;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						asList.push(sub.toString());
					} else {
						isExit1 = 0;
					}
				}
			}
			if (isExit2 == 1) {
				if (a - i * 10 > 0) {
					var sub = a - i * 10;
					var y = $("#" + sub).attr("src");
					if (x == y) {
						asList.push(sub.toString());
					} else {
						isExit2 = 0;
					}
				}
			}
		}
		if (ahList.length > 2) {
			remove(ahList);
		}
		if (asList.length > 2) {
			remove(asList);
		}
	}

	deale = function(a) {
		var x = $("#" + a).attr("src");
		if (x != "") {
			var ahList = [];
			var asList = [];
			var isExit = 1;
			var isExit1 = 1;
			var isExit2 = 1;
			var isExit3 = 1;
			ahList.push(a.toString());
			asList.push(a.toString());
			for (var i = 1; i < 5; i++) {
				if (isExit == 1) {
					if (a % 10 == 0) {
						b = 10;
					} else {
						b = a % 10;
					}
					if (b - i > 0) {
						var sub = a - i;
						var y = $("#" + sub).attr("src");
						if (x == y) {
							ahList.push(sub.toString());
						} else {
							isExit = 0;
						}
					}
				}
				if (isExit1 == 1) {
					if (a % 10 == 0) {
						b = 10;
					} else {
						b = a % 10;
					}
					if (b + i < 11) {
						var sub = a + i;
						var y = $("#" + sub).attr("src");
						if (x == y) {
							ahList.push(sub.toString());
						} else {
							isExit1 = 0;
						}
					}
				}
				if (isExit2 == 1) {
					if (a + i * 10 < 101) {
						var sub = a + i * 10;
						var y = $("#" + sub).attr("src");
						if (x == y) {
							asList.push(sub.toString());
						} else {
							isExit2 = 0;
						}
					}
				}
				if (isExit3 == 1) {
					if (a - i * 10 > 0) {
						var sub = a - i * 10;
						var y = $("#" + sub).attr("src");
						if (x == y) {
							asList.push(sub.toString());
						} else {
							isExit3 = 0;
						}
					}
				}
			}
			if (ahList.length > 2) {
				if (ahList.length > 3) {
					$("#" + ahList[0]).css("background-color","red");
					$("#" + ahList[0]).css("opacity", "0.5");
				}
				remove(ahList);
			}
			if (asList.length > 2) {
				if (asList.length > 3) {
					$("#" + asList[0]).css("background-color",
							"yellow");
					$("#" + asList[0]).css("opacity", "0.5");
				}
				remove(asList);
			}
		}
	}
});

origan=function(imgWidth){
	var block='';
	for (var i = 1; i < 101; i++) {
		var line="part"+i;
		block+='<div id='+line+' class="plotstyle">'	+		
		'<img id='+i+' src="" width='+imgWidth+' height='+imgWidth+'></div>';		
	}
	$("#conten").html(block);
};

fill=function(){
	for(var i=1;i<101;i++){
		var y=$("#"+i).attr("src");
		if(y==''){
			var x=Math.floor(Math.random() * 5);
			if(x==0){
				$("#"+i).css("opacity","1");
	  			 $("#"+i).css("background-color","");
				document.getElementById(""+i).src="pic/part1.jpg";				
			}
			if(x==1){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src="pic/1.jpg";				
			}
			if(x==2){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/2.jpg';				
			}
			if(x==3){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/3.jpg';
				
			}
			if(x==4){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/4.jpg';
				
			}
		}
	}
	setTimeout("first()",1000)
}

fillup1=function(){
	for(var i=1;i<101;i++){
		var y=$("#"+i).attr("src");
		if(y==''){
			var x=Math.floor(Math.random() * 6);
			if(x==0){
				$("#"+i).css("opacity","1");
	  			 $("#"+i).css("background-color","");
				document.getElementById(""+i).src="pic/part1.jpg";				
			}
			if(x==1){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src="pic/1.jpg";				
			}
			if(x==2){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/2.jpg';				
			}
			if(x==3){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/3.jpg';
				
			}
			if(x==4){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/4.jpg';
				
			}
			if(x==5){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/5.jpg';
				
			}
		}
	}
	setTimeout("first()",1000);
}

fillup2=function(){
	for(var i=1;i<101;i++){
		var y=$("#"+i).attr("src");
		if(y==''){
			var x=Math.floor(Math.random() * 7);
			if(x==0){
				$("#"+i).css("opacity","1");
	  			 $("#"+i).css("background-color","");
				document.getElementById(""+i).src="pic/part1.jpg";				
			}
			if(x==1){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src="pic/1.jpg";				
			}
			if(x==2){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/2.jpg';				
			}
			if(x==3){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/3.jpg';
				
			}
			if(x==4){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/4.jpg';
				
			}
			if(x==5){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/5.jpg';
				
			}
			if(x==6){
				$("#"+i).css("opacity","1");
	  			$("#"+i).css("background-color","");
				document.getElementById(""+i).src='pic/6.jpg';
				
			}
		}
	}
	setTimeout("first()",1000);
}

gotonextlevel=function(){
		$("#conmment").html('<div class="fontstyle1" style="font-weight: bold;">' + '超过1000分才可以进入下一关！'+ '</div>');
}