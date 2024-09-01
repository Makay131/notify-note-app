import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/notes')({
  component: () => <div>Hello /dashboard/notes!</div>,
});
