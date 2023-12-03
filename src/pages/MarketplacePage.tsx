import { Link, useParams } from 'react-router-dom'
import { assetsData } from '../data/asset.data'
import { marketplaceNavData } from '../data/marketplace-nav.data'

const MarketplacePage = () => {
	const { category } = useParams()
	return (
		<main className='p-16'>
			<section className='flex items-center justify-between py-3 border-b border-gray-500'>
				<h3 className='font-semibold uppercase'>
					Marketplace
					{category && <span className='ml-3'>/ {category}</span>}
				</h3>
				<nav>
					<ul className='flex'>
						{marketplaceNavData.map(link => (
							<li key={link} className='font-semibold list-none'>
								<Link
									to={`/marketplace/${
										link === 'Home' ? '' : link.toLowerCase()
									}`}
								>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</section>
			<section className='flex gap-3 px-2 mt-4'>
				<div className='grid grid-cols-4 gap-4 flex-[4]'>
					{assetsData.map(asset => (
						<div
							key={asset.id}
							className='p-2 overflow-hidden rounded-sm bg-[#262626]'
						>
							<div
								className='mb-2 bg-center bg-no-repeat bg-cover h-60'
								style={{ backgroundImage: `url(${asset.images[0]})` }}
							/>
							<h6>{asset.title}</h6>
							<Link to={'/marketplace/' + asset.author} className='text-sm'>
								{asset.author}
							</Link>
							<p className='mt-1 text-xs'>Rating: {asset.rating}</p>
							<p className='pb-2 mt-5 text-right'>${asset.price}</p>
							<div className='px-1 pt-3 pb-1 text-xs border-t border-violet-800'>
								<Link to={'/marketplace/' + asset.category}>
									{asset.category}
								</Link>
							</div>
						</div>
					))}
				</div>
				<aside className='flex-[.8] bg-[#262626] rounded-sm p-2 px-3'>
					<div className='flex items-center justify-between mt-1 mb-3'>
						<span className='text-base'>Filter Results</span>
						<button type='button' className='text-sm text-violet-500'>
							Reset
						</button>
					</div>
					<p>Tags</p>
					<input
						type='text'
						className='w-full p-2 mt-2 text-sm text-gray-400 border-2 border-transparent rounded-sm bg-stone-900 focus:outline-none focus:border-stone-600'
					/>
				</aside>
			</section>
		</main>
	)
}

export default MarketplacePage
