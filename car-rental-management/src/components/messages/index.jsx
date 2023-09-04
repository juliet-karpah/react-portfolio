import { styled } from "styled-components";
import { MessageExpand, MessageList } from "../ui/Message";
import { getChats } from "../../services/requests/api-chats";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MessagesDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 15px;
  margin: 20px 10px;
  height: 90%;
`;

export default function Messages() {
  const { isLoading, data: messages } = useQuery(["chats"], getChats);
  const [currentChat, setCurrentChat] = useState([])

  const setChat = (id) => {
    
    const res = messages.filter((user) => user.id == id)
    console.log(res)
    setCurrentChat(res)
  }
  console.log(isLoading, messages)
  return (
    <MessagesDiv>
      <MessageList users={messages} onClick={(id) => setChat(id)}/>
      <MessageExpand chats={currentChat}/>
    </MessagesDiv>
  );
}
