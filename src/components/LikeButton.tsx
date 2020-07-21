import React, { useState, useEffect } from 'react'
const LikeButton: React.FC = () => {
	const [like, setLike] = useState(0)
	useEffect(() => {
		document.title = 'a' + like
	})
	return (
		<button onClick={() => {setLike(like + 1)}}>
			{ like }👍
		</button>
	)
}
export default LikeButton