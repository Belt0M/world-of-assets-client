import AssetPage from '../pages/AssetPage'
import HomePage from '../pages/HomePage'
import MarketplacePage from '../pages/MarketplacePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
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
	{
		path: '/marketplace/:category',
		element: <MarketplacePage />,
	},
	{
		path: '/marketplace',
		element: <MarketplacePage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage/>,
	},
]
