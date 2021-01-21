const lst = []

const lst2 = new Array()

lst.push('joao')

const alunos = lst // shallow

const alunos2 = [...lst] // deep

alunos2.pop()

alunos2.push('caio')

alunos2.push('kkk')
alunos2.push('ddd')

console.log(alunos2)

alunos2.unshift('oi')

console.log(alunos2)



console.log(alunos2.slice(1))

let sala = ['huandrey', 'joao', 'maria', 'augusto']

let dormitorio = sala.filter(name => {
    // if (name.length > 5) {
    //     return true
    // }

    return name.length > 5
})

let dormitorio2 = sala.filter(name => name.length > 5)
console.log(dormitorio2)

console.log(dormitorio)

