import { FC, useMemo, useState } from 'react'
import { FaApple, FaLinux, FaStar, FaWindows } from 'react-icons/fa'
import { SiOculus } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { IAsset } from '../types/IAsset'
import { formatIsoDate } from '../utils/formatIsoDate.util'

interface Props {
	asset: IAsset
}

const AssetDescription: FC<Props> = ({ asset }) => {
	const {
		likesCount,
		price,
		title,
		author,
		category,
		data_modified,
		desc,
		rating,
		reviews,
	} = asset
	const [isRatingModal, setIsRatingModal] = useState<boolean>(false)

	const formattedData = useMemo(
		() => formatIsoDate(data_modified!),
		[data_modified]
	)

	const handleMouseEnter = () => {
		setIsRatingModal(true)
	}

	const handleMouseLeave = () => {
		setIsRatingModal(false)
	}

	return (
		<>
			<div>
				<h4>{title}</h4>
				<div className='mt-3'>
					<Link
						to='/marketplace'
						className='transition-all text-violet-500 visited:text-violet-600 hover:brightness-90'
					>
						{author}
					</Link>
					{' - '}
					<Link
						to='/marketplace'
						className='transition-all text-violet-500 visited:text-violet-600 hover:text-violet-400 hover:brightness-90'
					>
						{category}
					</Link>
					{' - '}
					<span className='font-[500]'>{formattedData}</span>
				</div>
				<div
					className='relative flex items-center gap-4 mt-4 text-lg text-yellow-400'
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<span className='flex gap-[.1rem]'>
						{Array(rating)
							.fill(0)
							.map((_, index) => (
								<FaStar key={index} />
							))}
					</span>
					<span className='text-xs mt-0.5'>
						2 review{reviews?.length > 1 && 's'} written
					</span>
					{/* Rating context, will be later */}
					{/* <div className='fixed rounded-md rounded-tl-none shadow-md mt-7 h-44 w-72 bg-secondary brightness-125'></div> */}
				</div>
				<p className='mt-3'>{desc}</p>
			</div>
			<div className='flex py-3 rounded-sm bg-secondary'>
				<div className='flex flex-col items-center w-1/2 pt-4'>
					<h2 className='font-bold'>{price}$</h2>
					<p>
						On Sale:{' '}
						<span className='line-through text-[#8b8f92]'>{price + 10}$</span>
					</p>
					<button
						type='button'
						className='py-3 mt-6 transition-all px-7 bg-violet-600 hover:bg-violet-500'
					>
						Sign in to Buy
					</button>
				</div>
				<div className='w-1/2 px-5 py-4 border-l border-white border-opacity-20'>
					<p className='text-xs font-semibold'>Supported Platforms</p>
					<p className='flex gap-1 mt-3 text-white'>
						<FaWindows />
						<SiOculus />
						<FaApple />
						<FaLinux />
					</p>
					<p className='mt-3 text-xs font-semibold'>
						Supported Engine Versions
					</p>
					<p className='mt-1.5'>4.26 - 4.27, 5.0 - 5.3</p>
					<p className='mt-2 mb-1 text-xs font-semibold'>Download Type</p>
					<span className='relative border-b border-dashed'>Asset Pack</span>
				</div>
			</div>
		</>
	)
}

export default AssetDescription
