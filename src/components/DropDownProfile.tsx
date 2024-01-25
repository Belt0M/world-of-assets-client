import {FC, MouseEvent, useRef} from 'react'
import {FaPlus, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import useClickOutside from '../hooks/useClickOutside'

interface DropDownProfileProps {
	onLogoutClick: (event: MouseEvent<HTMLLIElement>) => void
	setOpenProfile: React.Dispatch<React.SetStateAction<boolean>>
}
// <li className='account-li'><IoSettingsOutline className='icon'/>Settings</li> <= settings

const DropDownProfile: FC<DropDownProfileProps> = ({
	onLogoutClick,
	setOpenProfile,
}) => {
	const ref = useRef<HTMLDivElement>(null)

	useClickOutside(ref, setOpenProfile)

	return (
		<div className='flex flex-col dropDownProfile' ref={ref}>
			<ul className='flex flex-col gap-2 list-none'>
				<li className='account-li'>
					{' '}
					<Link to='/user/profile'>
						{' '}
						<FaUser className='icon' />
						Profile
					</Link>
				</li>
				<li className='account-li'>
					{' '}
					<Link to='/add-product'>
						{' '}
						<FaPlus className='icon' />
						Add your product
					</Link>
				</li>
				<li className='account-li' onClick={onLogoutClick}>
					<FaSignOutAlt className='icon' />
					<Link to='/'>Logout</Link>
				</li>
			</ul>
		</div>
	)
}

export default DropDownProfile
