import React, { FC } from 'react'
import { FiZoomOut } from 'react-icons/fi'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props {
	setIsZoomed: React.Dispatch<React.SetStateAction<boolean>>
	assetsForZoomed: string[]
}

const ZoomedSlider: FC<Props> = ({ assetsForZoomed, setIsZoomed }) => {
	return (
		<Swiper
			cssMode={true}
			navigation={true}
			pagination={true}
			mousewheel={true}
			keyboard={true}
			modules={[Navigation, Pagination, Mousewheel, Keyboard]}
			className='fixed inset-0 z-[100] h-screen'
		>
			{assetsForZoomed.map(img => (
				<SwiperSlide
					key={img}
					className='cursor-pointer select-none group'
					onClick={() => setIsZoomed(false)}
				>
					<img src={img} className='w-full max-h-full' />
					<FiZoomOut className='absolute text-5xl -translate-x-1/2 opacity-0 left-1/2 top-2/5 -translate-y1/2 group-hover:opacity-100' />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default ZoomedSlider
