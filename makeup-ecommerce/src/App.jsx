import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/Home";
import Layout from "./ui/AppLayout";
import ProductDetail from "./features/ProductDetail";
import { productsLoader, productLoader } from "./services/loaders";
import Error from "./ui/Error";
import Cart from "./features/cart/Cart";

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
        errorElement: <Error />,
        loader:({params}) => productLoader(params.productId)
      },{
        path:"/cart",
        element:<Cart />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
