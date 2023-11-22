import clsx from 'clsx'
import { FC } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props {
	setSelectedImage: React.Dispatch<React.SetStateAction<string>>
	selectedImage: string
	images: string[]
}

const GallerySlider: FC<Props> = ({
	setSelectedImage,
	selectedImage,
	images,
}) => {
	return (
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
						'cursor-pointer max-h-24 select-none'
					)}
				>
					<img src={img} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default GallerySlider
