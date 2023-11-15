import { FC } from 'react'

const HomePage: FC = () => {
	return (
		<main className='flex gap-2 py-16 px-44'>
			<div className='flex-[1.2]'>
				<h1>
					Discover the{' '}
					<span className='text-4xl text-transparent bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text'>
						World of Assets
					</span>
					,
					<br />
					<span className='text-4xl text-green-500'>buy</span> and{' '}
					<span className='text-4xl text-red-500'>sell </span>
					them here
				</h1>
				<p className='mt-8 text-gray-400'>
					Explore a realm of digital wonders on our platform—your gateway to a
					universe of 3D assets. Buy and sell with ease, and let creativity know
					no bounds. Welcome to the World of Assets!
				</p>
				<button
					type='button'
					className='px-6 py-3 mt-8 transition-all border-2 rounded-lg border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white'
				>
					Get Started
				</button>
			</div>
			<div className='flex-1'></div>
		</main>
	)
}

export default HomePage
