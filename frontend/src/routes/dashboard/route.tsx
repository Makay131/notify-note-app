import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import Sidebar from '../../components/sidebar/Sidebar';
import { checkAuth } from '../../service/auth/api';

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async ({ location }) => {
    try {
      await checkAuth();
    } catch (error) {
      console.log(error);
      throw redirect({
        to: '/login',
      });
    }
  },
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
