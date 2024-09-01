import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <>
      <nav>
        <li>1</li>
        <li>2</li>
      </nav>
      <Outlet />
    </>
  );
}
