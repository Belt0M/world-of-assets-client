import { FC, useCallback, useEffect, useState } from 'react'
import { FiZoomIn } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { assetsData } from '../data/asset.data'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import AssetDescription from '../components/AssetDescription'
import GallerySlider from '../components/GallerySlider'
import ZoomedSlider from '../components/ZoomedSlider'

const AssetPage: FC = () => {
	const { id: assetId } = useParams()
	const { images } = assetsData[parseInt(assetId!) - 1]
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
				<div className='w-3/5 h-full p-4 rounded-2xl bg-secondary bg-opacity-80'>
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
				<div className='flex flex-col justify-between w-2/5 px-5 py-6 rounded-2xl bg-opacity-80'>
					<AssetDescription asset={assetsData[parseInt(assetId!) - 1]} />
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
