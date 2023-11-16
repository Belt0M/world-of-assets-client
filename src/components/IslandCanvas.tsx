import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import { Model } from '../assets/3d/Scene.jsx'

const Island3D: FC = () => {
	return (
		<div className='relative mt-16 flex-[1.2] h-[18.5rem] bg-[#24934c] rounded-xl before:w-full before:h-full before:bg-[#26613b] before:-z-10 before:-top-4 before:-left-4 before:absolute before:rounded-xl after:w-full after:h-full after:bg-green-400 after:bg-opacity-30 after:-top-8 after:-left-8 after:absolute  after:-z-20 after:rounded-xl'>
			<Canvas camera={{ fov: 80, position: [1, 2, 5] }} className='z-50'>
				<ambientLight intensity={0.25} />
				<Environment preset='sunset' />
				<Model />
			</Canvas>
		</div>
	)
}

export default Island3D
