import {FC, useCallback, useEffect, useMemo, useState} from 'react'
import {FiZoomIn} from 'react-icons/fi'
import {useParams} from 'react-router-dom'
import {assetsData} from '../data/asset.data'

import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {FreeMode, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import AssetCard from '../components/AssetCard'
import AssetDescription from '../components/AssetDescription'
import AssetFullDescription from '../components/AssetFullDescription'
import GallerySlider from '../components/GallerySlider'
import ReviewsSection from '../components/ReviewsSection'
import ZoomedSlider from '../components/ZoomedSlider'
import {TMode} from '../types/TMode'

const AssetPage: FC = () => {
	const {id: assetId} = useParams()
	const asset = assetsData[parseInt(assetId!) - 1]
	const {images, keywords} = asset
	const [selectedImage, setSelectedImage] = useState<string>(images[0])
	const [isZoomed, setIsZoomed] = useState<boolean>(false)
	const [selectedMode, setSelectedMode] = useState<TMode>('Description')

	const modes = ['Description', 'Reviews', 'Questions']

	// Sort assets based on related tags count
	const getSortedByRelatedTagsAssets = useCallback(() => {
		const relatedArr = assetsData.filter(el => el.id !== asset.id)
		const sortedByTagsAssets = relatedArr.sort((assetA, assetB) => {
			const commonTagsA = assetA.keywords.filter(tag =>
				asset.keywords.includes(tag)
			)
			const commonTagsB = assetB.keywords.filter(tag =>
				asset.keywords.includes(tag)
			)

			return commonTagsB.length - commonTagsA.length
		})

		return sortedByTagsAssets
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [assetsData, asset])

	const sortedByTagsAssets = getSortedByRelatedTagsAssets().slice(0, 5)

	// Sort images for zoomed slider
	const assetsForZoomed = useMemo(() => {
		if (isZoomed) {
			const newAssetsForZoomed = [...images]
			newAssetsForZoomed.splice(newAssetsForZoomed.indexOf(selectedImage), 1)
			newAssetsForZoomed.unshift(selectedImage)
			return newAssetsForZoomed
		} else {
			return images
		}
	}, [selectedImage, images, isZoomed])

	// Close fullscreen slider on Esc press
	const escFunction = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsZoomed(false)
		}
	}, [])

	useEffect(() => {
		window.scrollTo(0, 0)
		document.addEventListener('keydown', escFunction, false)

		return () => {
			document.removeEventListener('keydown', escFunction, false)
		}
	}, [escFunction])

	return (
		<main className='px-16 py-12'>
			<section className='h-[35rem] flex justify-between gap-6'>
				<div className='w-3/5 h-full p-4 rounded-2xl bg-secondary bg-opacity-80'>
					<div
						style={{backgroundImage: `url(${selectedImage})`}}
						className='w-full overflow-hidden bg-center bg-no-repeat bg-cover h-4/5 rounded-2xl group'
						onClick={() => setIsZoomed(true)}
					>
						<div className='flex flex-col items-center justify-center w-full h-full gap-2 transition-all duration-300 opacity-0 cursor-pointer bg-opacity-60 bg-dark group-hover:opacity-100'>
							<FiZoomIn className='text-3xl' />
						</div>
					</div>
					<div className='mt-3'>
						<GallerySlider
							setSelectedImage={setSelectedImage}
							selectedImage={selectedImage}
							images={images}
						/>
					</div>
				</div>
				<div className='flex flex-col justify-between w-2/5 px-5 py-6 rounded-2xl bg-opacity-80'>
					<AssetDescription asset={asset} />
				</div>
			</section>
			<section className='p-3'>
				<div className='flex border-b border-darkGray border-opacity-40'>
					{modes.map(mode => (
						<span
							key={mode}
							className={clsx(
								selectedMode === mode
									? ' border-violet-500'
									: 'border-transparent',
								'py-4 text-lg transition-all cursor-pointer px-9 hover:bg-white hover:bg-opacity-10 border-b-2'
							)}
							onClick={() => setSelectedMode(mode as TMode)}
						>
							{mode}
						</span>
					))}
				</div>
				{selectedMode === 'Description' && (
					<AssetFullDescription keywords={keywords} />
				)}
				{selectedMode === 'Reviews' && (
					<ReviewsSection reviews={asset.reviews || []} />
				)}
			</section>
			<section>
				<h2 className='font-sub'>Related content: </h2>
				<div className='flex gap-10 mt-6'>
					<Swiper
						slidesPerView={3.5}
						spaceBetween={30}
						freeMode={true}
						modules={[FreeMode, Pagination]}
						className='flex w-[110%] overflow-hidden mySwiper'
					>
						{sortedByTagsAssets.map(asset => (
							<SwiperSlide key={'Trends ' + asset.title}>
								<AssetCard asset={asset} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
			{/* On the image zoom */}
			{isZoomed && (
				<ZoomedSlider
					setIsZoomed={setIsZoomed}
					assetsForZoomed={assetsForZoomed}
				/>
			)}
		</main>
	)
}

export default AssetPage
