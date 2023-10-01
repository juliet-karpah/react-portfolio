import { styled } from "styled-components";
import { H2 } from "./H2";
import ProfileCard, { Span } from "./ProfileCard";
import { ImageDiv, ProfileDiv, StyledCol, StyledDiv } from "./StyledDiv";
import { ButtonInit } from "./Button";
import {
  retrieveDate,
  retrieveTime,
} from "../../services/helper-functions/date";
import MessageCard from "./MessageCard";
import { Image } from "./ImageComp";
import Input from "./Input";
import AddMessageButton from "../messages/AddMessage";

import UseRenters from "../../hooks/useRenters";
import MessageForm from "./MessageForm";
import { SVG } from "./Svg";

const MessageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-100);
`;

const MessageContent = styled.section`
  height: 400px;
`;

const FormGroup = styled.form`
  display: flex;
  gap: 20px;
  margin: 20px;
  align-items: center;
`;

export const DIV = styled.div`
  overflow-y: auto;
  height: 500px;
`;

function MessageList(props) {
  return (
    <StyledDiv variation={"messages"}>
      <H2>
        <span>Messages </span>
        <AddMessageButton onClick={props.onClick} />
      </H2>
      <FormGroup>
        <Input type="text" onChange={props.updateUsers} />
      </FormGroup>
      <DIV>
        {props.users?.map((user, i) => (
          <ButtonInit message key={i} onClick={() => props.onClick(user.id)}>
            <ProfileCard
              urlPhoto={user.image}
              key={i}
              name={user.full_name}
              role={retrieveDate(user.created_at)}
            />
          </ButtonInit>
        ))}
      </DIV>
    </StyledDiv>
  );
}

function MessageExpand(props) {
  const { renters } = UseRenters();

  const getUser = (chat) => {
    let res = [];
    if (chat.from) {
      res = chat.from;
    } else if (chat.to) {
      res = chat.to;
    }
    return res;
  };

  const currentUserMessage = props.chats;
  const currentUser = props.chats.length
    ? getUser(props.chats[0])
    : renters?.filter((renter) => renter.id === props.id)[0];

  return (
    <StyledDiv variation={"messages"}>
      <MessageTitle>
        <ProfileCard
          urlPhoto={currentUser?.image}
          name={currentUser?.full_name}
        />
        <SVG
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
        </SVG>
      </MessageTitle>

      <MessageContent>
        {currentUserMessage?.map((chat, i) => (
          <ProfileDiv key={i}>
            <ImageDiv>
              <Image
                src={chat.from ? currentUser.image : "/profile-pic.png"}
                variation={"rounded"}
              />
            </ImageDiv>
            <StyledCol>
              <MessageCard key={i} message={chat.message} />
              <Span>
                {" "}
                {chat.to ? "You" : currentUser?.full_name.split(" ")[0]} sent
                this at {retrieveTime(chat.created_at)}{" "}
              </Span>
            </StyledCol>
          </ProfileDiv>
        ))}
      </MessageContent>
      <MessageForm currentUser={currentUser} />
    </StyledDiv>
  );
}

export { MessageExpand, MessageList };
