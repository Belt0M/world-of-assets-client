import clsx from 'clsx'
import {FC, useEffect, useState} from 'react'
import {IoSearchSharp} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../hooks/redux'
import {logOut} from '../store/reducers/AuthSlice'
import DropDownProfile from './DropDownProfile'

const Navbar: FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)
	const [openProfile, setOpenProfile] = useState<boolean>(false)
	const isLoggedIn = useAppSelector(store => store.auth.isLoggedIn)
	const dispatch = useAppDispatch()

	const changeNavbarColor = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
	}

	const handleLogoutClick = () => {
		dispatch(logOut())
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNavbarColor)

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', changeNavbarColor)
		}
	}, [])

	return (
		<header
			className={clsx(
				isScrolled ? 'bg-[#3d175c] bg-opacity-50' : 'bg-dark bg-opacity-80',
				'fixed inset-x-0 top-0 flex items-center justify-between h-20 px-16 transition-all duration-500 z-[100]'
			)}
		>
			<Link to='/'>
				<h1 className='w-32 text-white font-sub'>WoA</h1>
			</Link>
			<div className='flex items-center justify-between w-1/4 px-4 border-2 rounded-md h-11 bg-slate-700 bg-opacity-30 border-slate-700 text-slate-400'>
				<input
					type='text'
					className='w-5/6 h-full bg-transparent focus:outline-none caret-slate-400 font-sub'
					placeholder='Search...'
				/>
				<IoSearchSharp className='text-lg' />
			</div>
			{!isLoggedIn ? (
				<Link to='/login'>
					<div className='w-32 p-0.5 pt-[.15rem] rounded-md h-11 bg-gradient-to-r from-violet-500 to-pink-700'>
						<button
							type='button'
							className='w-full h-full transition-all rounded-md bg-dark hover:bg-transparent hover:text-white font-sub'
						>
							Sign Up
						</button>
					</div>
				</Link>
			) : (
				<div>
					<span
						className='accountName'
						onClick={() => setOpenProfile(prev => !prev)}
					>
						JohnSmith
					</span>
					{openProfile && (
						<DropDownProfile
							onLogoutClick={handleLogoutClick}
							setOpenProfile={setOpenProfile}
						/>
					)}
				</div>
			)}
		</header>
	)
}

export default Navbar
