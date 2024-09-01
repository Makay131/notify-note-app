import { createFileRoute, redirect } from '@tanstack/react-router';
import { checkAuth } from '../service/auth/api';

export const Route = createFileRoute('/')({
  beforeLoad: async ({ location }) => {
    console.log(location);
    try {
      await checkAuth();
    } catch (error) {
      console.log(error);
      throw redirect({
        to: '/login',
      });
    }
  },
  component: HomePage,
});

function HomePage() {
  return <div>HomePage</div>;
}
