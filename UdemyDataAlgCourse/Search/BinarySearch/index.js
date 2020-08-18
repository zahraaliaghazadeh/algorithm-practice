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