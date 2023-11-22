import { FC, useCallback, useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { FiZoomIn } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { assetsData } from '../data/asset.data'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import GallerySlider from '../components/GallerySlider'
import ZoomedSlider from '../components/ZoomedSlider'

const AssetPage: FC = () => {
	const { id: assetId } = useParams()
	const { title, images, likesCount, price } =
		assetsData[parseInt(assetId!) - 1]
	const [selectedImage, setSelectedImage] = useState<string>(images[0])
	const [isZoomed, setIsZoomed] = useState<boolean>(false)

	// Sort the images for zoomed slider
	let assetsForZoomed: string[] = []
	if (isZoomed) {
		assetsForZoomed = [...images]
		assetsForZoomed.splice(assetsForZoomed.indexOf(selectedImage), 1)
		assetsForZoomed.unshift(selectedImage)
	}

	// Close fullscreen slider on Esc press
	const escFunction = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsZoomed(false)
		}
	}, [])

	useEffect(() => {
		document.addEventListener('keydown', escFunction, false)

		return () => {
			document.removeEventListener('keydown', escFunction, false)
		}
	}, [escFunction])

	return (
		<main className='px-16 py-12'>
			<section className='h-[35rem] flex justify-between gap-6'>
				<div className='h-full w-3/5 rounded-2xl bg-[#1d232a] bg-opacity-80 p-4'>
					<div
						style={{ backgroundImage: `url(${selectedImage})` }}
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
