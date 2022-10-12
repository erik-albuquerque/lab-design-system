import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

type TextInputRootProps = {
  children: ReactNode,
}

type TextInputIconProps = {
  children: ReactNode,
}

type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {}

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }: TextInputRootProps) => {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}

const TextInputIcon: React.FC<TextInputIconProps> = ({ children }: TextInputIconProps) => {
  return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>
}

const TextInputInput: React.FC<TextInputInputProps> = ({ ...rest }: TextInputInputProps) => {
  return (
    <input className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400 ' {...rest} />
  )
}

TextInputRoot.displayName = 'TextInput.Root'
TextInputIcon.displayName = 'TextInput.Icon'
TextInputInput.displayName = 'TextInput.Input'

const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}

export type { TextInputRootProps, TextInputIconProps, TextInputInputProps }
export { TextInput }

