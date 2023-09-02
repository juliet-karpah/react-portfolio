import styled, { css } from 'styled-components';

const size = {
    small:css`
    height: 20px;
    width: 80%;
    `,
    medium:css`
    height: 8rem;
    `
}

export const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: #F2F3F5;
  width: 100%;
  ${props => size[props.size]}
`;