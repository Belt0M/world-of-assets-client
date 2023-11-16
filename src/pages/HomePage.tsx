import { FC, useEffect, useState } from 'react'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import AssetCard from '../components/AssetCard'
import HomeHeading from '../components/HomeHeading'
import Island3D from '../components/IslandCanvas'
import { assetsData } from '../data/asset.data'

const HomePage: FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 2000)
	}, [])

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
						pagination={{
							clickable: true,
						}}
						modules={[FreeMode, Pagination]}
						className='flex w-[110%] overflow-hidden mySwiper'
					>
						{assetsData.map(asset => (
							<SwiperSlide key={asset.title}>
								<AssetCard asset={asset} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
			{isLoading && (
				<div className='fixed inset-0 grid bg-dark place-items-center z-[1000]'>
					<h2 className='text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text animate-bounce'>
						Loading...
					</h2>
				</div>
			)}
		</main>
	)
}

export default HomePage
