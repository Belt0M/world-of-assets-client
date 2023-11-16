/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\scene.gltf 
Author: Tom Verbeeck (https://sketchfab.com/VerbeeckTom)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-mini-floating-island-48ef6c69479541d3b4aed13ff7290ff8
Title: Stylized Mini Floating Island
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Model(props: any) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { nodes, materials } = useGLTF('/scene.gltf') as any
	const [rotation, setRotation] = useState([0, 0, 0])

	useFrame(() => {
		// Оновлюємо кут обертання на кожному кадрі
		setRotation([rotation[0], rotation[1] + 0.01, rotation[2]])
	})

	return (
		<group {...props} rotation={rotation} dispose={null}>
			<group scale={0.01}>
				<group rotation={[0, -1.173, 0]}>
					<mesh
						geometry={nodes.Top_01_LP_Top_0.geometry}
						material={materials.material}
					/>
					<mesh
						geometry={nodes.Top_02_LP_Top_0.geometry}
						material={materials.material}
					/>
					<mesh
						geometry={nodes.Top_03_LP_Top_0.geometry}
						material={materials.material}
					/>
					<mesh
						geometry={nodes.Top_04_LP_Top_0.geometry}
						material={materials.material}
					/>
					<mesh
						geometry={nodes.Top_05_LP_Top_0.geometry}
						material={materials.material}
					/>
					<mesh
						geometry={nodes.Top_06_LP_Top_0.geometry}
						material={materials.material}
					/>
					<mesh
						geometry={nodes.Bottom_01_LP_Bottom_0.geometry}
						material={materials.Bottom}
					/>
					<mesh
						geometry={nodes.Bottom_02_LP_Bottom_0.geometry}
						material={materials.Bottom}
					/>
					<mesh
						geometry={nodes.Bottom_03_LP_Bottom_0.geometry}
						material={materials.Bottom}
					/>
					<mesh
						geometry={nodes.Bottom_04_LP_Bottom_0.geometry}
						material={materials.Bottom}
					/>
					<mesh
						geometry={nodes.Bottom_05_LP_Bottom_0.geometry}
						material={materials.Bottom}
					/>
					<mesh
						geometry={nodes.Bottom_06_LP_Bottom_0.geometry}
						material={materials.Bottom}
					/>
					<mesh
						geometry={nodes.Bottom_07_LP_Bottom_0.geometry}
						material={materials.Bottom}
					/>
					<mesh
						geometry={nodes.Cloth_01_LP_DetailsCloth_0.geometry}
						material={materials.DetailsCloth}
					/>
					<mesh
						geometry={nodes.Details_01_LP_DetailsCloth_0.geometry}
						material={materials.DetailsCloth}
					/>
				</group>
				<mesh
					geometry={nodes.Grass_01_OtherNature_0.geometry}
					material={materials.OtherNature}
				/>
				<mesh
					geometry={nodes.Ground_OtherNature_0.geometry}
					material={materials.OtherNature}
				/>
				<mesh
					geometry={nodes.Plant_01_LP_Leaves_0.geometry}
					material={materials.Leaves}
				/>
				<mesh
					geometry={nodes.Leaf_01_LP_Leaves_0.geometry}
					material={materials.Leaves}
				/>
				<mesh
					geometry={nodes.Leaf_01_LP_Leaves_0_1.geometry}
					material={materials.Leaves}
				/>
				<mesh
					geometry={nodes.Leaf_01_LP_Leaves_0_2.geometry}
					material={materials.Leaves}
				/>
				<mesh
					geometry={nodes.Sticks_01_OtherNature_0.geometry}
					material={materials.OtherNature}
				/>
				<mesh
					geometry={nodes.Rock_01_LP_BigRocks_0.geometry}
					material={materials.BigRocks}
				/>
				<mesh
					geometry={nodes.Rock_02_LP_BigRocks_0.geometry}
					material={materials.BigRocks}
				/>
				<mesh
					geometry={nodes.Tree_01_LP_BigTree_0.geometry}
					material={materials.BigTree}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/scene.gltf')
