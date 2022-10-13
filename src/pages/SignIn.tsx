import { Checkbox } from '@radix-ui/react-checkbox'
import { Envelope, Lock } from 'phosphor-react'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'

const SignIn: React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center my-8 text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading className='mt-4' size='lg'>
          Ignite Lab
        </Heading>
        <Text className='text-gray-400 mt-1'>Faça login e comece a usar!</Text>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text>Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input id='email' type='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text>Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input id='password' type='password' placeholder='***************' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />

          <Text className='text-gray-200' size='sm'>
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href='' className='text-gray-400 underline hover:text-gray-200'>
              Esqueceu sua senha?
            </a>
          </Text>
          <Text asChild size='sm'>
            <a href='' className='text-gray-400 underline hover:text-gray-200'>
              Não possui conta? Crie uma agora!
            </a>
          </Text>
        </footer>
      </form>
    </div>
  )
}

export { SignIn }