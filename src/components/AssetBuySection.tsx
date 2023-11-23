import { FC } from 'react'
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa'
import { SiOculus } from 'react-icons/si'

interface Props {
	price: number
}

const AssetBuySection: FC<Props> = ({ price }) => {
	return (
		<div className='flex py-3 rounded-sm bg-secondary'>
			<div className='flex flex-col items-center w-1/2 pt-4'>
				<h2 className='font-bold'>{price}$</h2>
				<p>
					On Sale:{' '}
					<span className='line-through text-darkGray'>{price + 10}$</span>
				</p>
				<button
					type='button'
					className='py-3 mt-6 transition-all rounded-sm px-7 bg-violet-600 hover:bg-violet-500'
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
				<p className='mt-3 text-xs font-semibold'>Supported Engine Versions</p>
				<p className='mt-1.5'>4.26 - 4.27, 5.0 - 5.3</p>
				<p className='mt-2 mb-1 text-xs font-semibold'>Download Type</p>
				<span className='relative border-b border-dashed'>Asset Pack</span>
			</div>
		</div>
	)
}

export default AssetBuySection
