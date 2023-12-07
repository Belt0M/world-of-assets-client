import { FC, useMemo, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IAsset } from '../types/IAsset'
import { formatIsoDate } from '../utils/formatIsoDate.util'
import AssetBuySection from './AssetBuySection'

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
	isRatingModal && console.log('m', likesCount)
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
			<AssetBuySection price={price} />
		</>
	)
}

export default AssetDescription
