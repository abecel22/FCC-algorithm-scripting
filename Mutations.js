
function mutation(arr) {

 var target = arr[0].toLowerCase();
 var test = arr[1].toLowerCase();

 for (var i= 0; i< test.length; i++){
   if (target.indexOf(test[i])< 0){
     return false;
   }
   }
   return true;
 }

console.log(mutation(["hello", "helLo"]));
