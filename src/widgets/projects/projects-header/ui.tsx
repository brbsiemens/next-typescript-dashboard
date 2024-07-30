import AddIcon from '@mui/icons-material/Add'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import {MyButton} from '@/components/Button'

export function ProjectsHeader() {
	return (
		<>
			<div className='h-screen w-full '>
				<div
					id='header'
					className='h-fit w-full'>
					<div
						id='header-title'
						className='flex my-8 ml-3 justify-between'>
						<h1 className='text-3xl font-semibold ml-5'>Customers</h1>
						<div
							id='header-title-button-group'
							className='mr-5'>
							<MyButton className='!border-gray-300 border-2 p-4 mr-4'>
								<CloudUploadOutlinedIcon />
								Import
							</MyButton>
							<MyButton className=' !bg-[#4d4aea] !text-[#dfdeff] p-4 mr-4'>
								<AddIcon />
								Add costumer
							</MyButton>
						</div>
					</div>
					<div
						id='header-sectional-tabBar'
						className='flex ml-5'>
						<MyButton className='mx-2 !text-[#4d4aea] !border-b-[#4d4aea] border-b-2 !rounded-none'>Overview</MyButton>
						<MyButton className='mx-2 !text-gray-400'>Table</MyButton>
						<MyButton className='mx-2 !text-gray-400'>List View</MyButton>
					</div>
				</div>
			</div>
		</>
	)
}
