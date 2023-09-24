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

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
`;



export const ProfileDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 10px;
`;

export const ImageDiv = styled.div`
height: ${props => props.noHeight ? "none": "100px"};
display:flex;
align-items: center;
`