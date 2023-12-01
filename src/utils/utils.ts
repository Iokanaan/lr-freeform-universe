export const min = function(array: number[]) {
    let min = array[0]
    for(let i=1;i<array.length;i++) {
      min = Math.min(array[i], min)
    }
    return min
  }
  
export const max = function(array: number[]) {
    let max = array[0]
    for(let i=1;i<array.length;i++) {
      max = Math.max(array[i], max)
    }
    return max
  }
  

// Conversion d'un entier vers du text pour transmission dans les tags
export const intToWord = function(n: number) {
    let neg = false
    if(n < 0) {
      neg=true
      n=Math.abs(n)
    }
    const chars = n.toString().split('')
    let word = ''
    for(var i in chars) {
        word += String.fromCharCode(97 + parseInt(chars[i]))
    }
    if(neg) {
        return "Z" + word
    } else {
        return word
    }
}

// Fonction inverse de la précédente
export const wordToInt = function(str: string) {
    let neg = false
    if(str.startsWith("Z")) {
        str = str.substring(1)
        neg = true
    } 
    const chars = str.split('')
    let res = ''
    for(var i in chars) {
        res += (chars[i].charCodeAt(0) - 97).toString()
    }
    if(neg) {
        return -parseInt(res)
    } else {
        return parseInt(res)
    }
}