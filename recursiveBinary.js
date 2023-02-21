function recursiveBinary(arr,target){
    return search(arr,target,0,arr.length)
}
function search(arr,target,left,right){
    if(left > right){
        return -1;
    }
    let middle = Math.floor((left+right)/2)
    if(target === arr[middle]){
        return middle
    }
    if(target < arr[middle]){
         return search(arr,target,left,middle+1)
    }
    if(target > arr[middle]){
        return search(arr,target,middle+1,right)
    }
}


console.log(recursiveBinary([-5,1,3,6,9,10],10))


//time complexity - log n because every time input reduces by 2