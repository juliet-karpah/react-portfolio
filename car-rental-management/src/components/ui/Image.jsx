import styled, { css } from "styled-components";

const variations = {
  rounded: css`
    border-radius: var(--border-radius-avatar);
    height: 60%;
  `,
  small: css`
    height: 50px;
    border-radius: var(--border-radius-md);
  `,
  medium: css`
    height: 150px;
    width: 200px;
    border-radius: var(--border-radius-md);
  `,
};


export const Image = styled.img`
object-fit: contain;
${props => variations[props.variation]}`;
