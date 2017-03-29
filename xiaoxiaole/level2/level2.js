var divtotal=["no1"];
function init(){
    var block='';
    for(var i=0;i<100;i++){
      var p='no'+(i+2);
      block+='<div id='+p+' class="init"></div>';
      
    }
    $("#"+"no1").html(block);
}
  


function setWidth(){
   init();
  var noWidth=$("#"+"no1").width();
  
  $(".init").css("width",noWidth/10-2.1);

  $("div.init").on('click', function(e) {
       var xid=e.target.id;
       var id=xid+'';
       if(id.indexOf('no')>=0){
         var x = $("#"+id).css("background-color");
         if (x=='rgb(0, 0, 0)') {
                $("#"+id).css("background-color","white");
          }
       }
    });
}

// document.onkeyup=function(event){
//   var e = event || window.event || arguments.callee.caller.arguments[0];
//    move(e);
   
// }; 

// function move(e){
//   if(e && e.keyCode==87){ // 按 w   
//          var id=pengzhuang("top");        
//          var top=$("#xiaohu").offset().top;
//          var topd=$("#"+id).offset().top;
//         if (top-40>=topd) {
//           $("#xiaohu").animate({
//             top:"-=40"
//            },'fast');          
//          } 
//          else{
       
//          }    
        
        
//     }
//   else if(e && e.keyCode==83){ // 按 s
//        var id=pengzhuang("down");       
//        var top=$("#xiaohu").offset().top+40;
//        var topd=$("#"+id).offset().top+$("#"+id).height();
//        if (top+40<=topd) {
//           $("#xiaohu").animate({
//           top:"+=40"
//          },'fast');
        
//        } 
//        else{
        
//        }  
 
       
//     }      
//    else if(e && e.keyCode==65){ // a 键
//       var id=pengzhuang("left");     
//       var left=$("#xiaohu").offset().left;
//       var leftd=$("#"+id).offset().left;
//       if (left-40>=leftd) {
//         $("#xiaohu").animate({
//             left:"-=40"
//         },'fast');
       
//       } 
//       else{
        
//       }  
   
//   }
//   else if(e && e.keyCode==68){ // d 键
//         var id=pengzhuang("right");
//         var left=$("#xiaohu").offset().left+40;
//         var rightd=$("#"+id).offset().left+$("#"+id).width();
//         if (left+40<=rightd) {
//           $("#xiaohu").animate({
//           left:"+=40"
//           },'fast');
          
//         }   
//         else{
          
//         }  
      
//   } 
//   else{
    
//   }

// }
// function pengzhuang(direction){
//   var divList=[];
//   if (direction=="top") {
//     for (var i = divtotal.length - 1; i >= 0; i--) {
//       var valuetem=$("#"+divtotal[i]).offset().top-$("#xiaohu").offset().top;
//       if(valuetem>0){
//         divList.push({id:divtotal[i],value:valuetem});
       
//       }
//     }
//     var sortlist=bubbleSort(divList);
//     for (var i = sortlist.length - 1; i >= 0; i--) {
//       if(parseInt($("#"+sortlist[i].id).css("border-top-width"))>0){
//         return sortlist[i].id;
//       }
//     }
//   }
//   if (direction=="down") {
//     for (var i = divtotal.length - 1; i >= 0; i--) {
//       var valuetem=$("#xiaohu").offset().top-$("#"+divtotal[i]).offset().top+parseInt($("#"+divtotal[i]).height());
//       if(valuetem>0){
//         divList.push({id:divtotal[i],value:valuetem});       
//       }
//     }
//     var sortlist=bubbleSort(divList);
//     for (var i = sortlist.length - 1; i >= 0; i--) {
//       if(parseInt($("#"+sortlist[i].id).css("border-bottom-width"))>0){
//         return sortlist[i].id;
//       }
//     }
//   }
//   if (direction=="left") {
//     for (var i = divtotal.length - 1; i >= 0; i--) {
//       var valuetem=$("#xiaohu").offset().left-$("#"+divtotal[i]).offset().left;
//       if(valuetem>0){
//         divList.push({id:divtotal[i],value:valuetem});
               
//       }
//     }
//     var sortlist=bubbleSort(divList);
//     for (var i = sortlist.length - 1; i >= 0; i--) {
//       if(parseInt($("#"+sortlist[i].id).css("border-left-width"))>0){
//         return sortlist[i].id;
//       }
//     }
//   }
//   if (direction=="right") {
//     for (var i = divtotal.length - 1; i >= 0; i--) {
//       var valuetem=$("#"+divtotal[i]).offset().left+parseInt($("#"+divtotal[i]).width())-$("#xiaohu").offset().left-40;
//       if(valuetem>0){
//         divList.push({id:divtotal[i],value:valuetem});
       
//       }
//     }
//     var sortlist=bubbleSort(divList);
//     for (var i = sortlist.length - 1; i >= 0; i--) {
//       if(parseInt($("#"+sortlist[i].id).css("border-right-width"))>0){
//         return sortlist[i].id;
//       }
//     }
//   }
// }

// bubbleSort = function(a) {
//   for ( var i = 0; i < a.length - 1; i++) {
//     for ( var j = 0; j < a.length - 1 - i; j++) {
//       if (a[j].value < a[j + 1].value) {
//         var temp = a[j];
//         a[j] = a[j + 1];
//         a[j + 1] = temp;
//       }
//     }
//   }
  
//   return a;
// };

var level=0;

start=function(){
   setInterval("add()", 1000);
   setTimeout(setInterval("fall()", 1000),1000);
}

add=function(){
  var x=Math.floor(Math.random() * 5);
  var y=Math.floor(Math.random() * 5);
  var l='no'+(level*10+y+7);
  var r='no'+(level*10+x+2);
  $("#"+l).css("background-color",'black');
  $("#"+r).css("background-color",'black');
}

fall=function(){
  for(var i=101;i>1;i--){
      var id='no'+i;
      var nextid='no'+(i+10);
      var color=$("#"+id).css("background-color");
      if(i>91){
        if(color=='rgb(0, 0, 0)'){
          $(".right").html("game over!");
        }      
      }
      else{      
        if(color=='rgb(0, 0, 0)'){
          $("#"+nextid).css("background-color",'black');
          $("#"+id).css("background-color",'');
        }
      }      
  }
}




 


