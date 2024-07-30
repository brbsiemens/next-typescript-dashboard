import {ButtonBase, ButtonBaseProps} from '@mui/material'
import {styled} from '@mui/material/styles'
import {VariantProps, cva} from 'class-variance-authority'
import {ClassValue} from 'class-variance-authority/types'
import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}
export const buttonVariants = cva('!border-transparent transition-all h-10 !rounded-md !justify-start  font-semibold text-lg !mt-2 p-4 ', {
	variants: {
		variant: {
			default: 'dark:bg-white dark:text-black bg-gray-100 hover:bg-gray-200 text-gray-600',
			primary: 'bg-primary-600 text-gray-50',
			dark: 'bg-gray-800 text-gray-50',
			transparent: 'bg-transparent dark:text-black text-black hover:bg-gray-100',
			outlined: 'border gray:!border-gray-800 !border-gray-200 text-gray dark:text-gray dark:hover:bg-gray-100 hover:bg-gray-100',
			outlined_active:
				'border dark:!border-blue-600 !border-blue-600 text-gray-700 dark:text-white dark:hover:bg-gray-100 hover:bg-gray-100',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

type Props = ButtonBaseProps & VariantProps<typeof buttonVariants>

export const MyButton = styled(({className, variant = 'default', color, ...props}: Props) => (
	<ButtonBase
		className={cn(buttonVariants({variant}), className)}
		{...props}
	/>
))({
	border: '1px solid',
})
