import { SetStateAction, useEffect } from 'react'

const useClickOutside = (
	ref: React.RefObject<HTMLElement>,
	setVisible: (value: SetStateAction<boolean>) => void
) => {
	const handleClickOutside = (event: MouseEvent) => {
		const target = event.target as HTMLElement
		if (ref.current && !ref.current.contains(target)) {
			setVisible(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}

export default useClickOutside
