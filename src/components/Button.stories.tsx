import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export const Default: StoryObj<ButtonProps> = {}

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button component',
  },
  argTypes: {
  }
} as Meta<ButtonProps>
