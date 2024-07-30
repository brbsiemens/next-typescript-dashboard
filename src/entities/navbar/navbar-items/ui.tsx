import Link from 'next/link'
import {NavbarItemProps} from './type'
import {useRouter} from 'next/router'
import {useMemo} from 'react'
import {MyButton, cn} from '@/components/Button'
export function NavBarItem({href, Slots, label}: NavbarItemProps) {
	const {asPath} = useRouter()
	const isActive = useMemo(() => asPath === href, [asPath, href])
	return (
		<>
			<Link href={href}>
				<MyButton
					variant={'transparent'}
					className={cn(isActive && '!text-[#4d4aea] !bg-[#dfdeff]', 'w-full pl-2')}>
					<Slots.Icon className='mr-2' />
					{label}
				</MyButton>
			</Link>
		</>
	)
}
