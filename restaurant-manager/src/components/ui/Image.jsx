import styled, { css } from "styled-components";

const variations = {
  rounded: css`
    border-radius: var(--border-radius-avatar);
    height: 50%;
  `,
  small: css`
    height: 50px;
    width: 100px;
    border-radius: var(--border-radius-md);
  `,
  medium: css`
    height: 200px;
    width: 300px;
    border-radius: var(--border-radius-md);
  `,
};


export const Image = styled.img`
object-fit: contain;
${props => variations[props.variation]}`;
