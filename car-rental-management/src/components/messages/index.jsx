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
  const [usersList, setUsersList] = useState([]);

  const setChat = (id) => {
    setCurrentChat(id);
  };

  useEffect(() => {
    setUsers();
  }, [isLoading]);

  const setUsers = () => {
    let users = isLoading
      ? []
      : messages.map((el) => {
          return el.from
            ? { ...el.from, created_at: el.created_at }
            : { ...el.to, created_at: el.created_at };
        });
    let map = {};
    users.forEach((item) => (map[item.id] = item));
    setUsersList(Object.values(map));
  };
  const updateUsers = (e) => {
    const term = e.target.value;
    if (term) {
      let usersNew = usersList.filter((user) => {
        return user.from.full_name.toLowerCase().includes(term.toLowerCase());
      });
      setUsersList(usersNew);
    } else {
      setUsers();
    }
  };

  const getChat = () => {
    const chats = messages.filter((mes) => {
      return mes?.from?.id == currentChat || mes?.to?.id == currentChat;
    });
    return chats;
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
          <MessageExpand chats={getChat()} id={currentChat} />
        </MessagesDiv>
      )}
    </>
  );
}
