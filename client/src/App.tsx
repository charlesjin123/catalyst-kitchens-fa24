import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './assets/theme.ts';
import { store, persistor } from './util/redux/store.ts';
import NotFoundPage from './NotFound/NotFoundPage.tsx';
import HomePage from './Home/HomePage.tsx';
import AdminDashboardPage from './AdminDashboard/AdminDashboardPage.tsx';
import {
  UnauthenticatedRoutesWrapper,
  ProtectedRoutesWrapper,
  DynamicRedirect,
  AdminRoutesWrapper,
} from './util/routes.tsx';
import VerifyAccountPage from './Authentication/VerifyAccountPage.tsx';
import RegisterPage from './Authentication/RegisterPage.tsx';
import LoginPage from './Authentication/LoginPage.tsx';
import EmailResetPasswordPage from './Authentication/EmailResetPasswordPage.tsx';
import ResetPasswordPage from './Authentication/ResetPasswordPage.tsx';
import AlertPopup from './components/AlertPopup.tsx';
import InviteRegisterPage from './Authentication/InviteRegisterPage.tsx';
import SignUpPage from './SignUp/SignUpPage.tsx';
import KitchenOutcome from './components/forms/KitchenOutcome.tsx';
import KitchenOutcomeViz from './components/KitchenOutcomeViz.tsx';
import ProgramOutcome from './components/forms/ProgramOutcome.tsx';
import OrgAdminPage from './AdminDashboard/OrgAdminPage.tsx';
import ProgramOutcomesVisualization from './components/ProgramOutcomesViz';

// Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <DynamicRedirect unAuthPath="/login" authPath="/home" />,
  },
  {
    path: '/',
    element: <UnauthenticatedRoutesWrapper />, // Wrapper for unauthenticated routes
    children: [
      { path: 'signup', element: <SignUpPage /> },
      { path: 'kitchen-outcome-viz-test', element: <KitchenOutcomeViz /> },
      {
        path: 'program-outcomes-viz-test',
        element: <ProgramOutcomesVisualization />,
      },
      { path: 'program-outcome-test', element: <ProgramOutcome /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'verify-account/:token', element: <VerifyAccountPage /> },
      { path: 'email-reset', element: <EmailResetPasswordPage /> },
      { path: 'reset-password/:token', element: <ResetPasswordPage /> },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoutesWrapper />, // Wrapper for authenticated routes
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'kitchen-outcome-test', element: <KitchenOutcome /> },
    ],
  },
  {
    path: '/',
    element: <AdminRoutesWrapper />, // Wrapper for admin routes
    children: [
      { path: 'users', element: <AdminDashboardPage /> },
      { path: 'organizations', element: <OrgAdminPage /> },
    ],
  },
  {
    path: '/invite/:token',
    element: <InviteRegisterPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <AlertPopup />
              <RouterProvider router={router} />
            </CssBaseline>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
