import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IAsset } from '../types/IAsset'
import AssetCard from './AssetCard'
interface Props {
	heading: string
	mt?: string
	slidesPerView?: number
	sliderPaddingLeft?: string
	data: IAsset[]
}

const Slider: FC<Props> = ({
	heading,
	mt = 'mt-6',
	slidesPerView = 3.5,
	sliderPaddingLeft = 'pl-44',
	data,
}) => {
	const sectionClassNames = mt + ' ' + sliderPaddingLeft

	return (
		<section className={sectionClassNames}>
			<div className='flex items-center justify-between w-[95%]'>
				<h2 className='font-sub'>{heading}</h2>
				<Link to='/marketplace'>View All</Link>
			</div>
			<div className='flex gap-10 mt-6'>
				<Swiper
					slidesPerView={slidesPerView}
					spaceBetween={30}
					freeMode={true}
					modules={[FreeMode, Pagination]}
					className='flex w-[110%] overflow-hidden mySwiper'
				>
					{data.map(asset => (
						<SwiperSlide key={'Trends ' + asset.title}>
							<AssetCard asset={asset} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Slider
