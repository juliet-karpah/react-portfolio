import { styled } from "styled-components";
import MainNav from "./MainNav";
import { Image } from "./ImageComp";

const StyledSideBar = styled.aside`
  grid-row: 1 / -1;
  background-color: var(--color-primary-main);
`;
export default function SideBar() {
  return (
    <StyledSideBar>
      <Image  src="logo_red.png" variation="medium" />
      <MainNav />
    </StyledSideBar>
  );
}
