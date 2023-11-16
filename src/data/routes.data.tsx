import AssetPage from '../pages/AssetPage'
import HomePage from '../pages/HomePage'
import { IRoute } from '../types/IRoute'

export const routesData: IRoute[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/asset/:id',
		element: <AssetPage />,
	},
]
