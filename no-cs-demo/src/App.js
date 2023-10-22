import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardNormal from './components/Dashboard';
import LandingPage from "./LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "normal",
    element: <DashboardNormal />,
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
