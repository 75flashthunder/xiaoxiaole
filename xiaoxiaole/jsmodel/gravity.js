var groundPro={};
var groundGroup=[];
var itemPro={};

//重力
var c=0;
var t=0;
var idtem;

g=function(id){  
	idtem=id;	 
	timedCount();	
}

function timedCount(b)
	{
		if(b==0){
			c=b;
		}
		else{
			c=c+0.01;	
		}
		
		time=setTimeout("timedCount()",10);
		t=c;
		if(t>3.5){
			clearInterval(time);			
		}
		gravity();
	}

gravity=function(){
	itemPro.top=parseInt($("#"+idtem).css("top"));
    itemPro.left=parseInt($("#"+idtem).css("left"));
    itemPro.right=itemPro.left+$("#"+idtem).width();
	for (var i = 0;i<groundGroup.length ;  i++) {
		if(groundGroup[i].left<=itemPro.left&&itemPro.right<=groundGroup[i].right){
			if (itemPro.top<groundGroup[i].top) {
				var deeplength=80*t*t; 
				itemPro.top+=deeplength
 		  	    $("#"+idtem).css("top",itemPro.top);
			}			
		}
	}	   
}

//平台
ground=function(id){
   groundPro.top=parseInt($("#"+id).css("top"));
   groundPro.left=parseInt($("#"+id).css("left"));
   groundPro.right=parseInt(groundPro.left)+$("#"+id).width();
   groundGroup.push(groundPro);
}