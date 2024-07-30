import HomeIcon from '@mui/icons-material/Home'
import NotificationsIcon from '@mui/icons-material/Notifications'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import SettingsIcon from '@mui/icons-material/Settings'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import {NavBarItem} from '@/entities/navbar/navbar-items'
import {NavbarUser} from '@/entities/navbar/navbar-users'
export function NavBar() {
	return (
		<div
			id='sidebar-content-layout'
			className=' w-1/5 h-screen border-black border-r-2 px-5 flex flex-col '>
			<div
				id='sidebar-logo'
				className='flex align-middle pt-9 px-5'>
				<Image
					src={logo}
					alt='Picture of the author'
					width={40}
				/>
				<h1 className=' text-2xl font-semibold mt-1 ml-3'>Untitled UI</h1>
			</div>
			<div
				id='sidebar-button-group'
				className='h-screen flex flex-col justify-between  '>
				<div
					id='sidebar-button-group-upper'
					className='mt-9 ml-3 '>
					<NavBarItem
						href='/projects'
						Slots={{
							Icon: FormatListBulletedIcon,
						}}
						label='Projects'
					/>

					<NavBarItem
						href='/notification'
						Slots={{
							Icon: NotificationsIcon,
						}}
						label='Notification'
					/>
				</div>
				<div
					id='sidebar-button-group-down'
					className='ml-3 '>
					<NavBarItem
						href='/support'
						Slots={{
							Icon: ContactSupportIcon,
						}}
						label='Support'
					/>
					<NavBarItem
						href='/settings'
						Slots={{
							Icon: SettingsIcon,
						}}
						label='Settings'
					/>
					<NavbarUser />
				</div>
			</div>
		</div>
	)
}
