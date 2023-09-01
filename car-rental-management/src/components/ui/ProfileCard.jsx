import { styled } from "styled-components";
import { Image } from "./image";

const ProfileDiv = styled.div`
  height: 50%;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 0 20px;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  color: var(--color-secondary-main);
`;
export default function ProfileCard(props) {
  return (
    <ProfileDiv>
      <Image variation="rounded" src={props.urlPhoto ? props.urlPhoto :"/profile-pic.png"} />
      <InfoDiv>
        <span> {props.name} </span>
        <Span> {props.role} </Span>
      </InfoDiv>
    </ProfileDiv>
  );
}
