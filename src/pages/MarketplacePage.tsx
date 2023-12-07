import Slider from '@mui/material/Slider'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom'
import { assetsData } from '../data/asset.data'
import { categoriesData } from '../data/categories.data'
import { marketplaceNavData } from '../data/marketplace-nav.data'
import { supportedPlatformsData } from '../data/supportedPlatforms.data'

const MarketplacePage = () => {
	const { category } = useParams()
	const [minMaxValue, setMinMaxValue] = useState<[number, number]>([10, 1000])
	const [keywords, setKeywords] = useState<string[]>([])
	const [keywordValue, setKeywordValue] = useState<string>('')
	const [platforms, setPlatforms] = useState<string[]>([])
	const [isContext, setIsContext] = useState<boolean>(false)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	// Max price slider change handler
	const handleChange = (_: Event, newValue: number | number[]) => {
		setMinMaxValue(newValue as [number, number])
	}

	const handleKeywordEnterClick = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.code === 'Enter') {
			const formattedValue = keywordValue.toUpperCase()
			if (keywords.includes(formattedValue)) {
				setKeywordValue('')
				return
			}
			setKeywords(prev => [...prev, formattedValue])
			setKeywordValue('')
		}
	}

	const isPlatformActive = (platform: string) => {
		return platforms.includes(platform)
	}

	const handlePlatformToggle = (platform: string) => {
		if (isPlatformActive(platform)) {
			setPlatforms(prev => prev.filter(el => el !== platform))
		} else {
			setPlatforms(prev => [...prev, platform])
		}
	}

	const handleKeywordRemove = (keyword: string) => {
		setKeywords(prev => prev.filter(el => el !== keyword))
	}

	const handleFiltersReset = () => {
		setKeywords([])
		setMinMaxValue([10, 1000])
		setPlatforms([])
	}

	const isMatchedByKeywords = (arr1: string[], arr2: string[]): boolean => {
		if (arr1.length === 0) return true
		let result = true
		for (const element of arr1) {
			if (!arr2.includes(element)) {
				result = false
				break
			}
		}
		return result
	}

	return (
		<main className='p-16'>
			<section className='flex items-center justify-between py-3 border-b border-gray-500'>
				<h3 className='font-semibold uppercase'>
					Marketplace
					{category && <span className='ml-3'>/ {category}</span>}
				</h3>
				<nav>
					<ul className='relative flex'>
						{marketplaceNavData.map(link =>
							link !== 'Categories' ? (
								<li key={link} className='font-semibold list-none'>
									<Link
										to={`/marketplace/${
											link === 'Home' ? '' : link.toLowerCase()
										}`}
									>
										{link}
									</Link>
								</li>
							) : (
								<>
									<li
										key={link}
										className='flex items-center relative font-semibold text-[#976ef6] list-none'
										onMouseEnter={() => setIsContext(true)}
									>
										{link}
										<RiArrowDropDownFill className='text-xl text-[#976ef6]' />
										{isContext && (
											<ul
												className='absolute -left-12 -bottom-[6.5rem]'
												onMouseLeave={() => setIsContext(false)}
											>
												{categoriesData.map(category => (
													<li
														key={category}
														className='py-3 px-5 font-normal text-gray-200 list-none transition-all bg-opacity-80 border-gray-500 cursor-pointer bg-[#291540] hover:bg-opacity-70'
													>
														<Link
															to={`/marketplace/${link.toLowerCase()}/${category.toLowerCase()}`}
														>
															{category}
														</Link>
													</li>
												))}
											</ul>
										)}
									</li>
								</>
							)
						)}
					</ul>
				</nav>
			</section>
			<section className='flex gap-3 px-2 mt-4'>
				<div className='grid grid-cols-4 gap-4 flex-[4]'>
					{assetsData.map(
						asset =>
							asset.price >= minMaxValue[0] &&
							asset.price <= minMaxValue[1] &&
							isMatchedByKeywords(keywords, asset.keywords) &&
							isMatchedByKeywords(platforms, asset.platforms) && (
								<div
									key={asset.id}
									className='p-2 overflow-hidden rounded-sm bg-[#262626] hover:bg-[#333333] transition-all max-h-[26.25rem]'
								>
									<Link to={`/asset/${asset.id}`}>
										<div
											className='mb-2 bg-center bg-no-repeat bg-cover cursor-pointer h-60'
											style={{ backgroundImage: `url(${asset.images[0]})` }}
										/>
									</Link>
									<h6>{asset.title}</h6>
									<Link to={'/marketplace/' + asset.author} className='text-sm'>
										{asset.author}
									</Link>
									<p className='pb-2 mt-5 text-right'>${asset.price}</p>
									<div className='px-1 pt-3 pb-1 text-xs border-t border-violet-800'>
										<Link
											to={'/marketplace/' + asset.category}
											className='flex items-center justify-between'
										>
											<span>{asset.category}</span>
											<span className='flex text-sm font-bold text-white'>
												<FaHeart
													className={clsx(
														asset.rating < 10 && 'text-red-300',
														asset.rating >= 10 &&
															asset.rating < 50 &&
															'text-red-400',
														asset.rating >= 50 && 'text-red-500',
														'mr-1.5 mt-[0.1rem] text-lg transition-all cursor-pointer hover:scale-110'
													)}
												/>{' '}
												{asset.rating}
											</span>
										</Link>
									</div>
								</div>
							)
					)}
				</div>
				<aside className='flex-[.8] bg-[#262626] rounded-sm p-2 px-3 max-h-[33rem] overflow-hidden'>
					<div className='flex items-center justify-between mt-1 mb-3'>
						<span className='text-base font-semibold'>Filter Results</span>
						<button
							type='button'
							className='text-sm text-violet-500'
							onClick={handleFiltersReset}
						>
							Reset
						</button>
					</div>
					{/* Keywords */}
					<p className='my-2'>Tags</p>
					<div className='flex items-center gap-2 mt-2 text-gray-400 border-2 border-transparent rounded-sm bg-stone-900 focus-within:outline-none focus-within:border-gray-400'>
						<input
							onKeyDown={handleKeywordEnterClick}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setKeywordValue(e.target.value)
							}
							type='text'
							value={keywordValue}
							className='w-4/5 h-full p-3 text-sm bg-transparent focus:outline-none'
							placeholder='Tag name...'
						/>
						<IoSearchSharp className='text-lg' />
					</div>
					<ul className='flex flex-wrap gap-2 mt-3'>
						{keywords.map(keyword => (
							<li
								key={keyword}
								className='px-2 py-1 m-0 text-xs font-semibold list-none transition-all rounded cursor-pointer bg-violet-500 bg-opacity-30 text-violet-500 hover:bg-red-400 hover:bg-opacity-30 hover:text-red-400'
								onClick={() => handleKeywordRemove(keyword)}
							>
								{keyword}
							</li>
						))}
					</ul>
					{/* Max Price */}
					<p className='my-2 mt-3'>Max Price</p>
					<div className='px-1'>
						<Slider
							getAriaLabel={() => 'Minimum distance'}
							value={minMaxValue}
							min={0}
							max={1000}
							onChange={handleChange}
							valueLabelDisplay='auto'
							disableSwap
							size='small'
						/>
					</div>
					<div className='flex justify-between'>
						<span>{minMaxValue[0]}</span>
						<span>{minMaxValue[1]}</span>
					</div>
					{/* Supported Platforms */}
					<p className='my-2 mt-3'>Supported Platforms</p>
					<ul className='flex flex-wrap gap-2 mt-3 overflow-y-auto max-h-60'>
						{supportedPlatformsData.map(platform => {
							const isSelected = isPlatformActive(platform)
							return (
								<li
									key={platform}
									className={clsx(
										isSelected ? 'bg-purple-500' : 'bg-gray-500',
										'px-2.5 py-1 m-0 text-xs font-semibold list-none transition-all rounded-lg cursor-pointer bg-opacity-30 text-gray-200 hover:brightness-125'
									)}
									onClick={() => handlePlatformToggle(platform)}
								>
									{platform}
								</li>
							)
						})}
					</ul>
				</aside>
			</section>
		</main>
	)
}

export default MarketplacePage
