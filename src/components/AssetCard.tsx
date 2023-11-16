import { FC } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { IAsset } from '../types/IAsset'

interface Props {
	asset: IAsset
}

const AssetCard: FC<Props> = ({ asset }) => {
	return (
		<div className='h-80 w-[25rem] rounded-2xl bg-[#1d232a] bg-opacity-80 p-4'>
			<div
				style={{ backgroundImage: `url(${asset.img})` }}
				className='w-full overflow-hidden bg-no-repeat bg-cover h-3/4 rounded-2xl group'
			>
				<Link
					to={`/asset/${asset.id}`}
					className='flex flex-col items-center justify-center w-full h-full gap-2 transition-all duration-300 origin-left scale-x-0 opacity-0 cursor-pointer bg-opacity-60 bg-dark group-hover:opacity-100 group-hover:scale-x-100'
				>
					<FaRegEye className='text-3xl transition-all duration-300 hover:scale-110' />
				</Link>
			</div>
			<h6 className='mt-3'>
				{asset.title.length > 20
					? asset.title.slice(0, 20) + '...'
					: asset.title}
			</h6>
			<div className='flex items-center justify-between mt-2 '>
				<span className='font-mono font-bold'>{asset.price} $</span>
				<span className='flex items-center'>
					<FaHeart className='mr-1 text-lg text-red-500 transition-all cursor-pointer hover:scale-110' />
					{asset.likesCount}
				</span>
			</div>
		</div>
	)
}

export default AssetCard
