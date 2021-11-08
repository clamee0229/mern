//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const intersect = (arrLeft, arrRight) => {
    let result = []
    for(let i = 0; i<arrLeft.length; i++){
        for(let x = 0; x<arrRight.length; x++){
            if(arrLeft[i] == arrRight[x] && arrLeft[i] !== result[x]){
                result.push(arrLeft[i])
                break
            }
        }
    }
    return result
}

console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(intersect([1,1,1,5,6,8],[1,1,4,5,8]));
console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
console.log(intersect([-9, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7], [-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7]));

//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const union = (arrLeft, arrRight) => {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex<=arrLeft.length && rightIndex<=arrRight.length){
        if(arrLeft[leftIndex] == arrRight[rightIndex]){
            result.push(arrLeft[leftIndex])
            leftIndex ++
            rightIndex ++
        }
        else if (arrLeft[leftIndex]<arrRight[rightIndex]){
            result.push(arrLeft[leftIndex])
            leftIndex ++
        }
        else{
            result.push(arrRight[rightIndex])
            rightIndex ++
        }
    }
    return result
}

console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(union([1,2,2,2,7],[2,2,6,6,7]));
console.log(union([1,5,9],[2,6,10]));
console.log(union([2,6,10],[1,5,9]));
