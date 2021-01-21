const name = 'huandrey'
const age = 20


const fullname = (name, age) => {
    return `${name} ${age}`
}

// module.exports = { name, age, fullname }

exports.name = name
exports.age = age

console.log(module)