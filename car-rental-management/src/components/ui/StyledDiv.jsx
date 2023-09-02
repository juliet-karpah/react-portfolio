import styled, { css } from "styled-components";

const variation = {
  messages: css`
    background-color: white;
    box-shadow: var(--shadow-md);
  `,
};

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: var(--border-radius-md);
  ${(props) => variation[props.variation]}
`;
