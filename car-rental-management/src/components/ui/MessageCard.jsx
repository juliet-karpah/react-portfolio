import { styled } from "styled-components";

const TextDiv = styled.div`
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const Paragraph = styled.p`

`

export default function MessageCard() {
  return (
    <TextDiv>
       <Paragraph> </Paragraph>
    </TextDiv>
  )
}
