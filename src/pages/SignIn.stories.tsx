import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { SignIn } from './SignIn'

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'usertest@gmail.com')
    userEvent.type(canvas.getByPlaceholderText('***************'), '12345678')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {},
  argTypes: {}
} as Meta
