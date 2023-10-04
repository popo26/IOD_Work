// var intervalId = setInterval(function(){
//     var timoutId = setTimeout(function(){ 
//         console.log("wait for me!");
//     }, 1000);
//  }, 1000);

var i = 0;
var intervalId = setInterval(function(){
   if(i === 10){
      clearInterval(intervalId);
   }
   console.log(i);
   i++;
}, 1000);
