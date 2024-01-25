import {FC} from 'react'
import {useNavigate} from 'react-router-dom'

const HomeHeading: FC = () => {
	const navigate = useNavigate()

	return (
		<div className='flex-[1.8] pr-44'>
			<h1 className='font-sub'>
				Discover the{' '}
				<span className='text-4xl text-transparent bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text font-sub'>
					World of Assets
				</span>
				,
				<br />
				<span className='text-4xl text-green-500 font-sub'>buy</span> and{' '}
				<span className='text-4xl text-yellow-500 font-sub'>sell </span>
				them here
			</h1>
			<p className='mt-8 text-gray-400 font-sub'>
				Explore a realm of digital wonders on our platform—your gateway to a
				universe of 3D assets. Buy and sell with ease, and let creativity know
				no bounds. Welcome to the World of Assets!
			</p>
			<button
				type='button'
				onClick={() => navigate('/marketplace')}
				className='px-6 py-3 mt-8 transition-all border-2 rounded-lg border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white font-sub'
			>
				Get Started
			</button>
		</div>
	)
}

export default HomeHeading
