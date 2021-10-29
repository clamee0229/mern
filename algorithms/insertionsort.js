function insertionSort(arr){
    let temp
    for(let i = 1; i<arr.length; i++){
        temp = i
        while(arr[temp]<arr[temp-1]){
            [arr[temp], arr[temp-1]] = [arr[temp-1], arr[temp]]
            temp--
        }
    }
    console.log(arr)
}

insertionSort([1,9,3,8,4,7,1,9,2,9,2,3])