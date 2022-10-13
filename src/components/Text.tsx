import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { HtmlHTMLAttributes, ReactNode } from 'react'

type TextProps = HtmlHTMLAttributes<HTMLSpanElement> & {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild?: boolean,
  className?: string
}

const Text: React.FC<TextProps> = ({ size = 'md', children, asChild = false, className }: TextProps) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans', 
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}>
      {children}
    </Comp>
  )
}

export type { TextProps }
export { Text }

