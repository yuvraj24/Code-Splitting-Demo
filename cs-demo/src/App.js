import { Suspense, lazy } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "./LandingPage";

const DashboardWithCS = lazy(() => import('./components/Dashboard'));

const wrapWithSuspense = (Component) => {
  return <Suspense>{Component}</Suspense>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "code-splitting",
    element: wrapWithSuspense(<DashboardWithCS />),
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
