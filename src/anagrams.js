// this is simple test
export const isAnagram =(string1,string2)=>{
    const string1letters = string1.split('')
    const string2letters = string2.split('')
    const string3letters = string3.split('')

    return string1letters.every(letter=>
        string2letters.includes(letter))
        && string2letters.every(letter=>
           string1letters.includes(letter))
}
