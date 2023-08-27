
import { GlobalStyles } from "./GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import AppLayout from "./components/ui/AppLayout";
import MetricsPage from "./Pages/MetricsPage";
import ReservationsPage from "./Pages/ReservationPage";
import RestaurantTables from "./components/tables";
import Menu from "./components/menu";
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 60 * 1000
    }
  }
})

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
          path:"/tables",
          element: <RestaurantTables />
        },
        {
          path:"/current-reservations",
          element: <ReservationsPage />,
        },
        {
          path: "/past-reservations",
          element: <ReservationsPage />
        },
        {
          path: "/menu",
          element: <Menu />
        }
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
