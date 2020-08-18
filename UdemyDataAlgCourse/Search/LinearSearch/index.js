// worst case O(n) best case O(1)
// we consider this as O(n)
// FindIndex, indexof, includes, and find are linear searches

function linearSearch(arr,val){
    for ( var i=0 ; i<arr.length; i++){
        if (arr[i]===val)return i;
    }
    return -1
}