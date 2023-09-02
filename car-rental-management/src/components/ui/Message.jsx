import { styled } from "styled-components";
import { H2 } from "./H2";
import { Input } from "./Input";
import ProfileCard from "./ProfileCard";
import { StyledDiv } from "./StyledDiv";
import { Button } from "./Button";
import { Textarea } from "./Textarea";

const MessageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-100);
  height: 60px;
`;

const MessageContent = styled.section`
height: 100%`;

const MessageForm = styled.form`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

function MessageList(props) {
  return (
    <StyledDiv variation={"messages"}>
      <H2>Messages</H2>
      <Input />
      {props.users.map((user, i) => (
        <ProfileCard key={i} name={user.full_name} role={user.role} />
      ))}
    </StyledDiv>
  );
}

function MessageExpand(props) {
  return (
    <StyledDiv variation={"messages"}>
      <MessageTitle>
        <ProfileCard name={props.full_name} role={props.last_active} />
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

      <MessageContent />

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
