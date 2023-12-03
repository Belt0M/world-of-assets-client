import { FC, useEffect, useState } from 'react'
import HomeHeading from '../components/HomeHeading'
import Island3D from '../components/IslandCanvas'
import Loader from '../components/Loader'
import Slider from '../components/Slider'
import { assetsData } from '../data/asset.data'
import { IAsset } from '../types/IAsset'

const HomePage: FC = () => {
	// The state flag for page loader
	const [isLoading, setIsLoading] = useState<boolean>(true)
	// Recently viewed assets, received from localStorage
	const [assets] = useState<IAsset[]>(assetsData.slice(5))
	const [recentAssets] = useState<IAsset[]>(
		JSON.parse(localStorage.getItem('recent_assets')!) || []
	)
	const [newAssets, setNewAssets] = useState<IAsset[]>([...assets])

	// Show a loader for 2s
	useEffect(() => {
		setTimeout(() => {
			setNewAssets(prev => prev.sort(compareIdsFn))
			setIsLoading(false)
		}, 1500)
	}, [])

	function compareIdsFn(a: IAsset, b: IAsset): number {
		if (a.id! < b.id!) {
			return 1
		} else if (a.id! > b.id!) {
			return -1
		}
		return 0
	}

	return (
		<main className='py-16'>
			<section className='flex items-center gap-2 mt-2 px-44'>
				<HomeHeading />
				<Island3D />
			</section>
			<Slider heading='Trends: ' mt='mt-12' data={assets} />
			<Slider
				heading='New: '
				slidesPerView={3}
				data={newAssets}
				sliderPaddingLeft='pl-72	'
			/>
			{recentAssets.length > 0 && (
				<Slider heading='Recently viewed: ' data={recentAssets} />
			)}

			{isLoading && <Loader />}
		</main>
	)
}

export default HomePage
