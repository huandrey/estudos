# Methods

## contains(class)

```js
	if (element.contains('btn')) return
```

## createElement('elementHTML')
```js
	const div = document.createElement('div')
```

## appendChild(element)
```js
	const div = document.createElement('div')
	const h1 = document.createElement('h1)
	
	div.appendChild(h1)
```

## querySelector(classe, id, etc)

Retorna determinado elemento buscado.


## addEventListener('event', callback)
```js
	// Admitindo que temos um form e um botao em nosso html
	// Admitindo tambem que nossos elementos possuem as classes 'form' e 'btn', respectivamente.
	const form = document.querySelector('.form')

	form.addEventListener('submit', event => {
		// Impede que a janela seja recarregada
		event.preventDefault()
	})

	// Outra maneira seria pegar apenas um evento de click do botao

	const button = document.querySelector('.btn')

	button.addEventListener('click', event => {
		event.preventDefault()
	})
```
