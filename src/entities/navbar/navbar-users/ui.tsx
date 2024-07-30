import {Avatar, IconButton} from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
export function NavbarUser() {
	return (
		<div className='border border-gray-400 rounded-xl my-4 pt-3 pl-4 flex'>
			<Avatar
				alt='Boris Starchenko'
				src='./userAvatar.png'
				className='w-10 h-10 mt-1'
			/>
			<div
				id='user-login-nickname'
				className='w-max'>
				<h1
					id='user-name'
					className='ml-2 font-semibold  '>
					Boris Starchenko
				</h1>
				<h1
					id='user-login'
					className='ml-2 mb-3'>
					@borstar
				</h1>
			</div>
			<IconButton className='ml-14 mb-3'>
				<UnfoldMoreIcon />
			</IconButton>
		</div>
	)
}
