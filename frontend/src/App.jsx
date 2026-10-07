import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Button } from '@heroui/react'

function App() {
  return (
    <div className='text-2xl bg-amber-500'>
      <header>
        <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal"/>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>

        <Button>My Button</Button>
      </header>
    </div>
  )
}

export default App
