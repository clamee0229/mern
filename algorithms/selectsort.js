function selectSort(arr){
    for(let i = 0; i<arr.length; i++){
        let temp = i
        for(let x = 0; x<arr.length - i; x++){
            if(arr[temp]<arr[x]){
                temp = x
            }
            console.log(temp)
        }
        let value = arr[temp]
        arr[temp] = arr[arr.length -1]
        arr[arr.length-1-i] = value
        console.log('=========')
    }
    console.log(arr)
}

selectSort([4,8,2,9,7,5,23,3,1])