import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
        {/*<Link to="/" className="[&.active]:font-bold">
          Home
        </Link>*/}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
