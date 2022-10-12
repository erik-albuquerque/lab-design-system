import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

type CheckboxProps = {}

const Checkbox: React.FC<CheckboxProps> = () => {
  return (
    <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] rounded bg-gray-800'>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='w-5 h-5 text-cyan-500' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export type { CheckboxProps }
export { Checkbox }

