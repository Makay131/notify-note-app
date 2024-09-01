import { createFileRoute, Outlet } from '@tanstack/react-router';
import Sidebar from '../../components/sidebar/Sidebar';

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
