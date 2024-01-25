import AddProductPage from '../pages/AddProductPage'
import AssetPage from '../pages/AssetPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/Login/LoginPage'
import PasswordEmailVerify from '../pages/Login/PasswordEmailVerificationPage'
import RegisterPage from '../pages/Login/RegisterPage'
import RestorePassword from '../pages/Login/RestorePasswordPage'
import MarketplacePage from '../pages/MarketplacePage'
import AccountSettingsPage from '../pages/User/UserProfile'
import {IRoute} from '../types/IRoute'

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
		path: '/add-product',
		element: <AddProductPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/restorepassword',
		element: <RestorePassword />,
	},
	{
		path: '/emailverify',
		element: <PasswordEmailVerify />,
	},
	{
		path: '/user/:activepage',
		element: <AccountSettingsPage />,
	},
	{
		path: '/marketplace/:category/:categoryName',
		element: <MarketplacePage />,
	},
]
