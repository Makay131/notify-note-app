/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as PasswordResetTokenImport } from './routes/password-reset/$token'
import { Route as DashboardTasksImport } from './routes/dashboard/tasks'
import { Route as DashboardNotesImport } from './routes/dashboard/notes'

// Create Virtual Routes

const VerifyEmailIndexLazyImport = createFileRoute('/verify-email/')()
const SignupIndexLazyImport = createFileRoute('/signup/')()
const LoginIndexLazyImport = createFileRoute('/login/')()
const ForgotPasswordIndexLazyImport = createFileRoute('/forgot-password/')()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const VerifyEmailIndexLazyRoute = VerifyEmailIndexLazyImport.update({
  path: '/verify-email/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/verify-email/index.lazy').then((d) => d.Route),
)

const SignupIndexLazyRoute = SignupIndexLazyImport.update({
  path: '/signup/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/signup/index.lazy').then((d) => d.Route))

const LoginIndexLazyRoute = LoginIndexLazyImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login/index.lazy').then((d) => d.Route))

const ForgotPasswordIndexLazyRoute = ForgotPasswordIndexLazyImport.update({
  path: '/forgot-password/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/forgot-password/index.lazy').then((d) => d.Route),
)

const DashboardIndexRoute = DashboardIndexImport.update({
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const PasswordResetTokenRoute = PasswordResetTokenImport.update({
  path: '/password-reset/$token',
  getParentRoute: () => rootRoute,
} as any)

const DashboardTasksRoute = DashboardTasksImport.update({
  path: '/dashboard/tasks',
  getParentRoute: () => rootRoute,
} as any)

const DashboardNotesRoute = DashboardNotesImport.update({
  path: '/dashboard/notes',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/notes': {
      id: '/dashboard/notes'
      path: '/dashboard/notes'
      fullPath: '/dashboard/notes'
      preLoaderRoute: typeof DashboardNotesImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/tasks': {
      id: '/dashboard/tasks'
      path: '/dashboard/tasks'
      fullPath: '/dashboard/tasks'
      preLoaderRoute: typeof DashboardTasksImport
      parentRoute: typeof rootRoute
    }
    '/password-reset/$token': {
      id: '/password-reset/$token'
      path: '/password-reset/$token'
      fullPath: '/password-reset/$token'
      preLoaderRoute: typeof PasswordResetTokenImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/forgot-password/': {
      id: '/forgot-password/'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof ForgotPasswordIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/signup/': {
      id: '/signup/'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/verify-email/': {
      id: '/verify-email/'
      path: '/verify-email'
      fullPath: '/verify-email'
      preLoaderRoute: typeof VerifyEmailIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  DashboardNotesRoute,
  DashboardTasksRoute,
  PasswordResetTokenRoute,
  DashboardIndexRoute,
  ForgotPasswordIndexLazyRoute,
  LoginIndexLazyRoute,
  SignupIndexLazyRoute,
  VerifyEmailIndexLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard/notes",
        "/dashboard/tasks",
        "/password-reset/$token",
        "/dashboard/",
        "/forgot-password/",
        "/login/",
        "/signup/",
        "/verify-email/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard/notes": {
      "filePath": "dashboard/notes.tsx"
    },
    "/dashboard/tasks": {
      "filePath": "dashboard/tasks.tsx"
    },
    "/password-reset/$token": {
      "filePath": "password-reset/$token.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/forgot-password/": {
      "filePath": "forgot-password/index.lazy.tsx"
    },
    "/login/": {
      "filePath": "login/index.lazy.tsx"
    },
    "/signup/": {
      "filePath": "signup/index.lazy.tsx"
    },
    "/verify-email/": {
      "filePath": "verify-email/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
