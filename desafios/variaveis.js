let varA = 5 // varB = 6
let varB = 6 // varC = 7
let varC = 7 // varA = 5

let lstt = [1, 2, 3]

function mudaValor(varA, varB, varC) {
    [varA, varB, varC] = [varB, varC, varA]
    return [varA, varB, varC]
}

console.log(mudaValor(varA, varB, varC))