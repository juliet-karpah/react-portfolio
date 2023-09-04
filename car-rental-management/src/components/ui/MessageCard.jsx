import { styled } from "styled-components";

const TextDiv = styled.div`
  width: 60%;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 0 20px;
`;

const Paragraph = styled.p`
color: var(--color-grey-600)
`;

export default function MessageCard(props) {
  return (
    <TextDiv>
      <Paragraph>{props.message} </Paragraph>
    </TextDiv>
  );
}
