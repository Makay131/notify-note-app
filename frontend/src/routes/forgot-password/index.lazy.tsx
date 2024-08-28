import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/forgot-password/')({
  component: () => <div>Hello /forgot-password/!</div>
})