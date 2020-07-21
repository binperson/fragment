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