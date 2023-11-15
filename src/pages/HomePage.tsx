import { FC } from 'react'
import { FaHeart } from 'react-icons/fa6'
import Island3D from '../components/IslandCanvas'
import { assetsData } from '../data/asset.data'

const HomePage: FC = () => {
	return (
		<main className='py-16 px-44'>
			<section className='flex items-center gap-2 mt-2'>
				<div className='flex-[1.8] pr-44'>
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
						universe of 3D assets. Buy and sell with ease, and let creativity
						know no bounds. Welcome to the World of Assets!
					</p>
					<button
						type='button'
						className='px-6 py-3 mt-8 transition-all border-2 rounded-lg border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white'
					>
						Get Started
					</button>
				</div>
				<div className='relative mt-16 flex-[1.2] h-[18.5rem] bg-[#24934c] rounded-xl before:w-full before:h-full before:bg-[#26613b] before:-z-10 before:-top-4 before:-left-4 before:absolute before:rounded-xl after:w-full after:h-full after:bg-green-400 after:bg-opacity-30 after:-top-8 after:-left-8 after:absolute  after:-z-20 after:rounded-xl'>
					<Island3D />
				</div>
			</section>
			<section className='mt-12'>
				<h2>Trends: </h2>
				<div className='flex gap-10 mt-6'>
					{assetsData.map(asset => (
						<div
							key={asset.title}
							className='h-80 w-[25rem] rounded-xl bg-[#1d232a] p-4'
						>
							<div
								style={{ backgroundImage: `url(${asset.img})` }}
								className='w-full bg-center bg-no-repeat bg-cover h-3/4'
							></div>
							<h6 className='mt-3'>
								{asset.title.length > 20
									? asset.title.slice(0, 21) + '...'
									: asset.title}
							</h6>
							<div className='flex items-center justify-between '>
								<span className='mt-2 font-mono font-bold'>
									{asset.price} $
								</span>
								<span className='flex items-center'>
									<FaHeart className='mr-1 text-lg text-red-500 transition-all cursor-pointer hover:scale-110' />
									{asset.likesCount}
								</span>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}

export default HomePage
