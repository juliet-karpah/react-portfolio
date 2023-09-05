import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { styled } from "styled-components";

const Main = styled.main`
background-color: var(--color-grey-100);
overflow: auto;
`

const StyledAppLayout = styled.div`
display: grid;
grid-template-columns: 15rem 1fr;
grid-template-rows: auto 1fr;
height: 100vh;
`

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
      <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
