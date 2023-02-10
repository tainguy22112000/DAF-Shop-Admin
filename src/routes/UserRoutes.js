// project imports
import { USERS_PAGE_ROUTER, USERS_PATH } from 'constants/routes';
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// user page routing
const UserProfilePage = Loadable(lazy(() => import('views/users/userProfile')));
const UserAccountPage = Loadable(lazy(() => import('views/users/userProfile')));

// ==============================|| MAIN ROUTING ||============================== //

const UserRoutes = {
  path: USERS_PAGE_ROUTER,
  element: <MainLayout />,
  children: [
    {
      path: USERS_PATH.Account,
      element: <UserAccountPage />,
    },
    {
      path: USERS_PATH.Profile,
      element: <UserProfilePage />,
    },
  ],
};

export default UserRoutes;
