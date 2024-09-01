import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/tasks')({
  component: () => <div>Hello /dashboard/tasks!</div>
})