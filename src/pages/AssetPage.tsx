import { FC } from 'react'
import { FaHeart } from 'react-icons/fa'
import { MdOpenInNew } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { assetsData } from '../data/asset.data'

const AssetPage: FC = () => {
	const { id: assetId } = useParams()
	const { title, img, likesCount, price } = assetsData[parseInt(assetId!) - 1]

	return (
		<main className='px-16 py-12'>
			<section className='h-[35rem] flex justify-between gap-8'>
				<div className='h-full w-2/3 rounded-2xl bg-[#1d232a] bg-opacity-80 p-4'>
					<div
						style={{ backgroundImage: `url(${img})` }}
						className='w-full overflow-hidden bg-no-repeat bg-cover h-5/6 rounded-2xl group'
					>
						<div className='flex flex-col items-center justify-center w-full h-full gap-2 transition-all duration-300 opacity-0 cursor-pointer bg-opacity-60 bg-dark group-hover:opacity-100'>
							<MdOpenInNew className='text-3xl transition-all duration-300 hover:scale-110' />
						</div>
					</div>
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
				<div className='w-1/3 rounded-2xl bg-[#1d232a] bg-opacity-80 p-4'></div>
			</section>
		</main>
	)
}

export default AssetPage
