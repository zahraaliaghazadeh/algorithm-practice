// big O
// worst case O(log n) best case O(1)
// 16 elements was 4 steps, 32 elements was 5 steps 
// and that is logn , binary search is very fast
//  It only works on sorted arrays


function binarySearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (val < arr[middle]) {
            right = middle - 1;
        }
        else if (val > arr[middle]) {
            left = middle + 1;
        }
        else {
            return middle;
        }
    }
    return -1;
  }