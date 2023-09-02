import { styled } from "styled-components";
import { MessageExpand, MessageList } from "../ui/Message";

const MessagesDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 15px;
  margin: 20px 10px;
  height: 90%;
`;

export default function Messages() {
  return (
    <MessagesDiv>
      <MessageList users={[]} />
      <MessageExpand />
    </MessagesDiv>
  );
}
