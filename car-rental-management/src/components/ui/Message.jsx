import { styled } from "styled-components";
import { H2 } from "./H2";
import ProfileCard from "./ProfileCard";
import { ImageDiv, ProfileDiv, StyledDiv } from "./StyledDiv";
import { Button, ButtonInit } from "./Button";
import { Textarea } from "./Textarea";
import { retrieveTime } from "../../services/helper-functions/date";
import MessageCard from "./MessageCard";
import { Image } from "./image";

const MessageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-100);
`;

const MessageContent = styled.section`
  height: 400px;
`;

const MessageForm = styled.form`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  position: relative;
  top: 130px;
`;

function MessageList(props) {
  const user = props.users?.filter((user) => user.chats.length > 0);
  return (
    <StyledDiv variation={"messages"}>
      <H2>Messages</H2>
      {user?.map((user, i) => (
        <ButtonInit key={i} onClick={() => props.onClick(user.id)}>
          <ProfileCard
            urlPhoto={user.image}
            key={i}
            name={user.full_name}
            role={retrieveTime(user.chats[0]?.created_at)}
          />
        </ButtonInit>
      ))}
    </StyledDiv>
  );
}

function MessageExpand(props) {
  const currentUserMessage = props.chats.length ? props.chats[0].chats : [];
  const currentUser = props.chats.length ? props.chats[0] : []
  return (
    <StyledDiv variation={"messages"}>
      <MessageTitle>
        <ProfileCard urlPhoto={currentUser.image} name={currentUser.full_name} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </MessageTitle>

      <MessageContent>
        {currentUserMessage.map((chat, i) => (
          <ProfileDiv key={i}>
            <ImageDiv>
              <Image
                src={currentUser ? currentUser.image: "/profile-pic.png"}
                variation={"rounded"}
              />
            </ImageDiv>
            <MessageCard key={i} message={chat.message} />
          </ProfileDiv>
        ))}
      </MessageContent>
      <MessageForm>
        <Textarea size="small" />
        <Button primary $borderMargin>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </Button>
      </MessageForm>
    </StyledDiv>
  );
}

export { MessageExpand, MessageList };
