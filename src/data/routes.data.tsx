import AssetPage from '../pages/AssetPage'
import HomePage from '../pages/HomePage'
import MarketplacePage from '../pages/MarketplacePage'
import LoginPage from '../pages/Login/LoginPage'
import RegisterPage from '../pages/Login/RegisterPage'
import RestorePassword from '../pages/Login/RestorePasswordPage'
import PasswordEmailVerify from '../pages/Login/PasswordEmailVerificationPage'
import AccountSettingsPage from '../pages/User/UserProfile'
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
  {
		path: '/restorepassword',
		element: <RestorePassword/>,
  },
  {
	path: '/emailverify',
	element: <PasswordEmailVerify/>,
  },
  {
	path: '/user/:activepage',
	element: <AccountSettingsPage/>
  },
  {
		path: '/marketplace/:category/:categoryName',
		element: <MarketplacePage />,
	},
]
