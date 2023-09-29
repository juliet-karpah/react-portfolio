import { GlobalStyles } from "./GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import AppLayout from "./components/ui/AppLayout";
import MetricsPage from "./Pages/MetricsPage";
import ReservationsPage from "./Pages/ReservationPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Cars from "./components/cars";
import RentersPage from "./Pages/Renters";
import MessagesPage from "./Pages/MessagesPage";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 1000,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
      children: [
        {
          path: "/metrics",
          element: <MetricsPage />,
        },
        {
          path: "/cars",
          element: <Cars />,
        },
        {
          path: "/current-reservations",
          element: <ReservationsPage />,
        },
        {
          path: "/upcoming-reservations",
          element: <ReservationsPage />,
        },
        {
          path: "/messages",
          element: <MessagesPage />,
        },
        {
          path: "/past-reservations",
          element: <ReservationsPage />,
        },
        {
          path: "/renters",
          element: <RentersPage />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            backgroundColor: "var(--color-grey-100)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
