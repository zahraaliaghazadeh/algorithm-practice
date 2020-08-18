// to count the number of times a string appeared in a string
// O(n^2)


// this function might need to be cleaned up
function naiveSearch(long,short){
var count = 0;
for(var i= 0 ; i< short.length ; i++){
  for(var j= 0 ; j< short.length ; j++){
   if (short[j] !== long[i+j]) {
       break;
   }
   if(j === short.length-1){
       count ++
   }
}
}
return count
}