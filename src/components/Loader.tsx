import { FC } from 'react'

const Loader: FC = () => {
	return (
		<div className='fixed inset-0 grid bg-dark place-items-center z-[1000]'>
			<h2 className='text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text animate-bounce'>
				Loading...
			</h2>
		</div>
	)
}

export default Loader
