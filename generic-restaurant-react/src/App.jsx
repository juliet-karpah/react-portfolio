import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/Home";
import Layout from "./ui/AppLayout";
import ProductDetail from "./features/ProductDetail";
import { productsLoader, productLoader } from "./services/loaders";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Home />,
        loader: productsLoader,
      },
      {
        path:"/product/:productId",
        element: <ProductDetail />,
        loader:({params}) => productLoader(params.productId)
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
