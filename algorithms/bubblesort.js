function bubblesort(arr){
    if(arr.length == 0){
        console.log('Array is empty')
        return
    }
    if(arr.length == 1){
        console.log('Only one item in the array')
    }
    for(let x = 0; x<arr.length; x++){
        for(let i = 0; i<arr.length-x; i++){
            if(arr[i]>arr[i+1]){
                arr[i] = arr[i+1] + arr[i]
                arr[i+1] = arr[i] - arr[i + 1]
                arr[i] = arr[i] - arr[i + 1]
            }
        }
    }
    console.log(arr)
}

bubblesort([6,4,5,2,9,3,8,4,2,1,9])
bubblesort([1])
bubblesort([])