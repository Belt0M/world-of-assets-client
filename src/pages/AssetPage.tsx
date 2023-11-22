import { FC, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { MdOpenInNew } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { assetsData } from '../data/asset.data'

import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const AssetPage: FC = () => {
	const { id: assetId } = useParams()
	const { title, images, likesCount, price } =
		assetsData[parseInt(assetId!) - 1]
	const [selectedImage, setSelectedImage] = useState<string>(images[0])

	return (
		<main className='px-16 py-12'>
			<section className='h-[35rem] flex justify-between gap-6'>
				<div className='h-full w-3/5 rounded-2xl bg-[#1d232a] bg-opacity-80 p-4'>
					<div
						style={{ backgroundImage: `url(${selectedImage})` }}
						className='w-full overflow-hidden bg-no-repeat bg-cover h-4/5 rounded-2xl group'
					>
						<div className='flex flex-col items-center justify-center w-full h-full gap-2 transition-all duration-300 opacity-0 cursor-pointer bg-opacity-60 bg-dark group-hover:opacity-100'>
							<MdOpenInNew className='text-3xl transition-all duration-300 hover:scale-110' />
						</div>
					</div>
					<div className='mt-3'>
						<Swiper
							modules={[Navigation, Pagination]}
							slidesPerView={4.3}
							spaceBetween={15}
							navigation={true}
						>
							{images.map(img => (
								<SwiperSlide
									key={img}
									onClick={() => setSelectedImage(img)}
									className={clsx(
										selectedImage === img
											? 'opacity-100'
											: 'opacity-40 hover:opacity-100 transition-all duration-150',
										'cursor-pointer'
									)}
								>
									<img src={img} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
				<div className='w-2/5 rounded-2xl bg-[#1d232a] bg-opacity-80 p-4'>
					<h6 className='px-1 mt-6'>
						{title.length > 20 ? title.slice(0, 21) + '...' : title}
					</h6>
					<div className='flex items-center justify-between px-1 mt-2'>
						<span className='font-mono font-bold'>{price} $</span>
						<span className='flex items-center'>
							<FaHeart className='mr-1 text-lg text-red-500 transition-all cursor-pointer hover:scale-110' />
							{likesCount}
						</span>
					</div>
				</div>
			</section>
		</main>
	)
}

export default AssetPage
