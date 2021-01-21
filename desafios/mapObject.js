const people = [
	{
		id: 3,
		name: 'Luiz'
	},
	{
		id: 2,
		name: 'Ricardo'
	}
]

// const newPeople = people.map(person => {
// 	let { id } = person
// 	return person[id] = { ...person }
// })

const newPeople = new Map()

for (const person of people) {
	const { id } = person
	newPeople.set(id, { ...person })
}

console.log(newPeople)

console.log(newPeople.get(2))
newPeople.delete(3)

console.log(newPeople)

for (const [id, { name }] of newPeople) {
	console.log(id, name)
}