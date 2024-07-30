import {NavBar} from '@/widgets/navbar'
import React, {PropsWithChildren} from 'react'

export function Layout({children}: PropsWithChildren) {
	return (
		<div className='flex h-screen w-full'>
			<NavBar />
			<main className='w-full'>{children}</main>
		</div>
	)
}
