import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/signup/')({
  component: SignupPage,
})

function SignupPage() {
  return <div className="p-2">Hello from signup!</div>
}
