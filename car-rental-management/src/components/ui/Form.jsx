import { styled } from "styled-components";

export const Form = styled.form`
width:${props => props.width};
background: #ffffff;
display: flex;
flex-direction: column;
box-shadow: var(--shadow-md);
padding: 4rem;
align-items: center;
justify-content: space-between;
`

export const Error = styled.span`
  font-size: 0.7rem;
  color: var(--color-primary-variant-light);
  display: block;
`;