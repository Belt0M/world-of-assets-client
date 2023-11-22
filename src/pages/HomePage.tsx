import { FC, useEffect, useState } from 'react'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import AssetCard from '../components/AssetCard'
import HomeHeading from '../components/HomeHeading'
import Island3D from '../components/IslandCanvas'
import Loader from '../components/Loader'
import { assetsData } from '../data/asset.data'
import { IAsset } from '../types/IAsset'

const HomePage: FC = () => {
	// The state flag for page loader
	const [isLoading, setIsLoading] = useState<boolean>(true)
	// Recently viewed assets, received from localStorage
	const [recentAssets] = useState<IAsset[]>(
		JSON.parse(localStorage.getItem('recent_assets')!) || []
	)
	const [newAssets] = useState<IAsset[]>([...assetsData])

	// Show a loader for 2s
	useEffect(() => {
		setTimeout(() => {
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
			<section className='mt-12 pl-44'>
				<h2>Trends: </h2>
				<div className='flex gap-10 mt-6'>
					<Swiper
						slidesPerView={3.5}
						spaceBetween={30}
						freeMode={true}
						modules={[FreeMode, Pagination]}
						className='flex w-[110%] overflow-hidden mySwiper'
					>
						{assetsData.map(asset => (
							<SwiperSlide key={'Trends ' + asset.title}>
								<AssetCard asset={asset} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
			<section className='mt-6 pl-44'>
				<h2 className='pl-20'>New: </h2>
				<div className='flex gap-10 pl-20 mt-6'>
					<Swiper
						slidesPerView={3}
						spaceBetween={30}
						freeMode={true}
						modules={[FreeMode, Pagination]}
						className='flex w-[110%] overflow-hidden mySwiper'
					>
						{newAssets.sort(compareIdsFn).map(asset => (
							<SwiperSlide key={'New ' + asset.title}>
								<AssetCard asset={asset} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
			{recentAssets.length > 0 && (
				<section className='mt-6 pl-44'>
					<h2>Recently viewed: </h2>
					<div className='flex gap-10 mt-6'>
						<Swiper
							slidesPerView={3.5}
							spaceBetween={30}
							freeMode={true}
							modules={[FreeMode, Pagination]}
							className='flex w-[110%] overflow-hidden mySwiper'
						>
							{recentAssets.slice(0, 5).map((asset, index) => (
								<SwiperSlide key={'Recent ' + asset.title + index}>
									<AssetCard asset={asset} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</section>
			)}

			{isLoading && <Loader />}
		</main>
	)
}

export default HomePage
