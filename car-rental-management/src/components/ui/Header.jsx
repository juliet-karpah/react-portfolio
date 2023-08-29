import { styled } from "styled-components";
import ProfileCard from "./ProfileCard";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <div></div>

      <ProfileCard />
    </StyledHeader>
  );
}
