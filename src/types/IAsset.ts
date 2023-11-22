export interface IAsset {
	id?: number
	title: string
	desc?: string
	images: string[]
	likesCount: number
	price: number
	data_modified?: string
	data_created?: string
	keywords?: string[]
	author?: string
	category?: string
}
