export const formatIsoDate = (data: string): string => {
	const date = new Date(data)
	const formatted = date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})
	return formatted
}
