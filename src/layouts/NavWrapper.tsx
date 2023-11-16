import { FC, PropsWithChildren } from 'react'
import Navbar from '../components/Navbar'

const NavWrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default NavWrapper
