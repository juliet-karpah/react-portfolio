import { styled } from "styled-components";
import "./App.css";
import { GlobalStyles } from "./GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

const StyledMain = styled.main`
  margin: 0 auto;
`;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
  ]);
  return (
    <>
      <GlobalStyles />
      <StyledMain>
        <RouterProvider router={router} />
      </StyledMain>
    </>
  );
}

export default App;
