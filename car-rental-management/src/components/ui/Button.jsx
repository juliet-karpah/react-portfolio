import { styled } from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.primary ? "var(--color-secondary-main)" : "#FFFFFF"};
  color: ${(props) =>
    props.primary ? "white" : "var(--color-primary-main)"};
  padding: 0.25rem 1rem;
  border: none;
  border-radius: ${(props) => props.$borderMargin && " 5px"};
  font-family: inherit;
  &:hover {
    background: ${(props) =>
      props.$secondary
        ? "var(--color-primary-main)"
        : "var(--color-secondary-variant-dark)"};
    color: white;
    cursor: pointer;
  }
  &:disabled{
    background-color: var(--color-grey-200);
    border: none;
    cursor: not-allowed;
    color: var(--color-secondary-main);
  }
`;
