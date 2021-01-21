const lst = ['huandrey', 'augusto', 'pedro']

for (let i in lst) {
    console.log(i)
}

for (let element of lst) {
    console.log(element)
}

// OBJETO NÃO É ITERÁVEL 
// APENAS O FOR IN FUNCIONA!!!

let objeto = {
    name: 'huandrey',
    age: 19
}

console.log(objeto.length)
for (let k = 0; k < objeto.length; k++) {
    console.log(k)
}

// j é a chave do objeto
for (let j in objeto) {
    console.log(j, objeto[j])
}