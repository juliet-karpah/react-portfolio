import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/Home";
import Layout from "./ui/AppLayout";
import ProductDetail from "./features/ProductDetail";
import { action as checkoutAction } from "./features/checkout/CheckoutForm";
import { productsLoader, productLoader } from "./services/loaders";
import Error from "./ui/Error";
import Cart from "./features/cart/Cart";
import ConfirmationPage from "./features/checkout/Confirmation";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsLoader,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
        errorElement: <Error />,
        loader: ({ params }) => productLoader(params.productId),
      },
      {
        path: "/cart",
        element: <Cart />,
        action: checkoutAction,
      },
      {
        path: "/confirmation/:id",
        element: <ConfirmationPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
