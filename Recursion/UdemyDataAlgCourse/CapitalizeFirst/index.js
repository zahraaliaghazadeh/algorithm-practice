
function capitalizeFirst(arr){
    let newArr = []
    if ( arr.length === 0) return newArr;
    newArr.push(arr[0][0].toUpperCase() + arr[0].substring(1).toLowerCase());
    newArr = newArr.concat(capitalizeFirst(arr.Slice(1)))
    return newArr;
}