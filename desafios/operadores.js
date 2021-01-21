console.log(10 === '10')


const corUsuario = null
const corPadrao = corUsuario || 'preto' // Cor padrão vai ser igual a cor do usuário ou preto

const a = null
const b = undefined
const c = 5
const d = NaN
const e = ''

console.log(a || b || c || d || e) // 'false' -> string não vazia, portando true!

// && retorna o ultimo true se todos forem verdadeiros
// && se apenas um for falso, já retorna o primeiro
// || retorna o primeiro true
// || se todos forem false, retorna o ultimo false


console.log(a && b && c && d && e)