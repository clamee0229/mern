//rotate string--> given a string and a number, return a string that is the rotated version of the original by x number of characters


function rotateString(str,num){
    let result = ""
    let x = 0
    for(let i = 0; i<str.length; i++){
        if(i<num){
            result+=str[str.length-num+i]
        }
        else{
            result+=str[x]
            x++
        }
    }
    return result

}


console.log(rotateString("hello", 2)) //"lohel"
    //1st rotation- ohell
    //2nd rotation- lohel
rotateString("steph curry is best shooter of all time", 4) //"timesteph curry is best shooter of all"
    //1st rotation - "esteph curry is best shooter of all tim"
    //2nd rotation - "mesteph curry is best shooter of all ti"
    //3rd rotation - "imesteph curry is best shooter of all t"
    //4th rotation - "timesteph curry is best shooter of all "


rotateString("them roots tho", 6)



//bonus- isRotation-->given two strings, return a boolean on if they are rotations of one another
function isRotation(str1, str2){
    let isARotation = false
    for(var i=1; i<str1.length; i++) {
        if(rotateString(str1,i) == str2) isARotation = true;
    }
    return isARotation;
}

console.log(isRotation("hello", "lohel")) //true
isRotation("abcd", "dacc") //false