import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import { Model } from '../assets/3d/Scene.jsx'

const Island3D: FC = () => {
	return (
		<Canvas camera={{ fov: 80, position: [1, 2, 5] }} className='z-50'>
			<ambientLight intensity={0.25} />
			<Environment preset='sunset' />
			<Model />
		</Canvas>
	)
}

export default Island3D
