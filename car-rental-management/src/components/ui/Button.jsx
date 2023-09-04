import { styled } from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.primary ? "var(--color-secondary-main)" : "#FFFFFF"};
  color: ${(props) =>
    props.primary ? "white" : "var(--color-secondary-main)"};
  border: ${(props) =>
    props.secondary && "0.25 rem solid var(--color-secondary-main)"};
  padding: 0.25rem 1rem;
  border-radius: ${props => props.$borderMargin && " 5px"};
  font-family: inherit;
  border: none;
  &:hover {
    background: var(--color-secondary-variant-dark);
    color: white;
    cursor: pointer;
  }
`;
