export const getLetterCount = String => {
    const letters = String.split('')
    let letterCount = {}
    letters.forEach(letter =>{
        if(!letterCount[letter]){
            letterCount[letter] = 1
        }else{
            letterCount[letter] +=1
        }
    })
    return letterCount
}