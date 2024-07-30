import {SvgIconProps} from '@mui/material'

export type NavbarItemProps = {
	label?: string
	href: string
	Slots: {Icon: React.ElementType<SvgIconProps>}
	className?: string
}
