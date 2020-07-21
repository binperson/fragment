#### Class

```js
componentDidMount () {
	const { id } = this.props
	fetch(`xxx?id=${id}`)
	document.addEventListener('keypress', callback)
}
componentDidUpdate () {
	const { id } = this.props
	fetch(`xxx?id=${id}`)
}
componentWillUnmount () {
	document.removeEventListener('keypress', callback)
}
```

```js
componentDidMount() {
	document.addEventListener('click', this.updateMouse)
}
componentWillUnmount () {
	document.removeEventListener('click', this.updateMouse)
}
```