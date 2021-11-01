let sentence = 'Hi Everybody, welcome to week 2!'

const stringToWordArray = (str) =>{
    let regex = /[^a-zA-Z0-9 ]/g
    let arr = ['']
    let x = 0
    for(let i = 0; i<str.length; i++){
        if(regex.test(str[i])){
            x++
            arr[x] = '' + str[i]
        }
        else if(str[i]!=' '){
            arr[x] += str[i]
        }
        else{
            x++
            arr[x] = ''
        }
    }
    return arr
}

console.log(stringToWordArray(sentence))
console.log(stringToWordArray(''))