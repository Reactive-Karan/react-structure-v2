import RequireAuth from "../requireAuth";
import { roles, routes } from "../../constants";
import * as lazy from "./lazyComponents";
import AuthLayout from "../../components/layouts/Auth.layout";
// import AuthSecondaryLayout from "../../components/layouts/Auth.Secondary.layout";
// import MainLayout from "../../components/layouts/Main.layout";
import PrimaryLayout from "../../components/layouts/Primary.layout";

export const routesData = [
  {
    path: routes.DEFAULT_BASE_REDIRECT,
    element: <h1>Page Not Found</h1>,
    role: [roles.author, roles.superAdmin, roles.patient, roles.other],
  },
  {
    path: routes.SIGN_UP,
    element: (
      <AuthLayout>
        <h1>Damn</h1>
      </AuthLayout>
    ),
    role: [roles.author, roles.superAdmin, roles.patient, roles.other],
  },
  {
    path: routes.SIGN_IN,
    element: (
      // <AuthLayout>
      //   <lazy.Login />
      // </AuthLayout>

      // <AuthSecondaryLayout>
      //   <lazy.Login />
      // </AuthSecondaryLayout>

      // <MainLayout>
      //   <lazy.Login />
      // </MainLayout>

      <PrimaryLayout>
        <lazy.Login />
      </PrimaryLayout>
    ),
    role: [roles.author, roles.superAdmin, roles.patient, roles.other],
  },
  {
    path: routes.ROOT,
    element: <h1>Hello mister</h1>,
    role: [roles.author, roles.superAdmin, roles.patient, roles.other],
  },
  {
    path: routes.ROOT_ALL,
    element: (
      <RequireAuth>
        <h1>Main Layout</h1>
      </RequireAuth>
    ),
    role: [roles.author, roles.superAdmin, roles.patient, roles.other],
    children: [
      {
        path: routes.DASHBOARD,
        element: <h1>Nigga component</h1>,
        role: [roles.author, roles.superAdmin],
      },
    ],
  },
];
