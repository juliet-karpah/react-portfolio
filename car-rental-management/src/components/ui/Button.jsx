import { styled } from "styled-components";

export const ButtonInit = styled.button`
  background: ${(props) =>
    props.primary ? "var(--color-secondary-main)" : "#FFFFFF"};
  color: ${(props) => (props.primary ? "white" : "var(--color-primary-main)")};
  padding: 0.25rem 1rem;
  border: none;
  border-radius: ${(props) => props.$borderMargin && " 5px"};
  font-family: inherit;
  &:hover {
    background: ${(props) =>
      props.$secondary
        ? "var(--color-grey-100)"
        : "var(--color-secondary-variant-dark)"};
    color: ${(props) => (props.$secondary ? "var(--color-grey-500)" : "white")};
    cursor: pointer;
    transition: all 1s;
  }
  &:disabled {
    background-color: var(--color-grey-200);
    border: none;
    cursor: not-allowed;
    color: var(--color-grey-500);
  }
`;

export const Button = styled(ButtonInit)`
  width: 8rem;
  height: 3rem;
`;

export const ButtonDanger = styled(Button)`
  background-color: var(--color-primary-variant-light);
  color: white;
  &:hover {
    background: var(--color-primary-variant-dark);
    color: white;
    cursor: pointer;
  }
`;
