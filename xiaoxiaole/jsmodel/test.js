

go=function(){
	g("test");
	ground("gro");
}

document.onkeyup=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
   move(e);
   
}; 

function move(e){
  if(e && e.keyCode==87){ // 按 w 
  			var c=0;  
          $("#test").animate({
            top:"-=80"
           },'fast');   
           timedCount(c);        
    }
  else if(e && e.keyCode==83){ // 按 s
       	var c=0;
          $("#test").animate({
          top:"+=40"
         },'fast');  
         timedCount(c);    
    }      
   else if(e && e.keyCode==65){ // a 键
      var c=0;
        $("#test").animate({
            left:"-=40"
        },'fast');  
        timedCount(c);
  }
  else if(e && e.keyCode==68){ // d 键   
 			 var c=0;     
          $("#test").animate({
          left:"+=40"
          },'fast');
          timedCount(c);
  }  
}

