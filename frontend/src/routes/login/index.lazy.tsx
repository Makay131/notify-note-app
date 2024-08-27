import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login/')({
  component: LoginPage,
})

function LoginPage() {
  return <div className="p-2">Hello from About!</div>
}
