import React, { useState } from 'react'
const LikeButtonTwo: React.FC = () => {
	const [obj, setObj] = useState({ like: 0, on: true})
	return (
	<>
		<button onClick={() => {setObj({ like: obj.like + 1, on: obj.on})}}>
			{ obj.like }👍
		</button>
		<button onClick={() => {setObj({ like: obj.like + 1, on: !obj.on})}}>
			{ obj.on ? 'ON' : 'OFF' }
		</button>
	</>
	)
}
export default LikeButtonTwo