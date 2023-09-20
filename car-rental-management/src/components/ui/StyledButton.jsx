import { styled } from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  transition: all 0.2s;
  display: flex;
  cursor: pointer;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

export default function Button({ icon, onClick }) {
  return <StyledButton onClick={onClick}>{icon}</StyledButton>;
}
