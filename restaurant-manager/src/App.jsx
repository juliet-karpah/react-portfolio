
import { GlobalStyles } from "./GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import AppLayout from "./components/ui/AppLayout";
import MetricsPage from "./Pages/MetricsPage";
import ReservationsPage from "./Pages/ReservationPage";
import { reservationsLoader } from "./services/loader";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout />,
      children: [
        {
          path: "/metrics",
          element: <MetricsPage />,
        },
        {
          path:"/current-reservations",
          element: <ReservationsPage />,
          loader: reservationsLoader
        },
        {
          path: "/past-reservations",
          element: <ReservationsPage />
        }
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
