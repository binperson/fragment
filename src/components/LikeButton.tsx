import React, { useState, useEffect } from 'react'

import useMousePosition from '../hooks/useMousePosition'

const LikeButton: React.FC = () => {
	const [like, setLike] = useState(0)
	const positions = useMousePosition()
	useEffect(() => {
		document.title = 'a' + like
	}, [like])
	return (
		<button onClick={() => {setLike(like + 1)}}>
			{ like }👍
			<p>X: {positions.x}, Y : {positions.y}</p>
		</button>
	)
}
export default LikeButton