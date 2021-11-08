const panagram = (str) =>{
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if(str.length < 26){
        return false
    }
    // 26 booleans
    // arr [a, b, c, ...] <- Pop off as they get found
    // str 'abc...' --> checks index against every index of input string
    for (let i = 0; i<alphabet.length; i++){
        for (let j = 0; j<str.length; j++){
            if(alphabet[i].toLowerCase() == str[j].toLowerCase()){
                break
            }
            else if(j==str.length-1){
                return false
            }
        }
    }
    return true
}
console.log(panagram('d'))
console.log(panagram('Sphinx of black quartz, judge my vow'))