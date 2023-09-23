import { styled } from "styled-components";
import { MessageExpand, MessageList } from "../ui/Message";
import { getChats } from "../../services/requests/api-chats";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const MessagesDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 15px;
  margin: 20px 10px;
  height: 90%;
`;

export default function Messages() {
  const { isLoading, data: messages } = useQuery({
    queryKey: ["chats"],
    queryFn: getChats,
  });
  const [currentChat, setCurrentChat] = useState("");
  const [usersList, setUsersList] = useState([])

  const setChat = (id) => {
    console.log(id);
    setCurrentChat(id);
  };

  useEffect(()=> {
    let users = isLoading
    ? []
    : messages.map((el) => {
        return { created_at: el.created_at, from: el.from };
      });
      setUsersList(users)
  }, [])


  const updateUsers = (e) => {
    const term = e.target.value;
    if(term){
      let usersNew = usersList.filter((user) => {
        console.log(user.from.full_name.replace(" ", "").toLowerCase(), term, user.from.full_name.toLowerCase().includes(term.toLowerCase()))
        return user.from.full_name.toLowerCase().includes(term.toLowerCase());
      });
      setUsersList(usersNew)
    }else{
      let users = isLoading
      ? []
      : messages.map((el) => {
          return { created_at: el.created_at, from: el.from };
        });
        setUsersList(users)
    }
 
  };

  return (
    <>
      {isLoading && !messages ? (
        <div>Loading ...</div>
      ) : (
        <MessagesDiv>
          <MessageList
            users={usersList}
            onClick={(id) => setChat(id)}
            updateUsers={updateUsers}
          />
          <MessageExpand
            chats={messages.filter((mes) => mes.from.id == currentChat)}
          />
        </MessagesDiv>
      )}
    </>
  );
}
