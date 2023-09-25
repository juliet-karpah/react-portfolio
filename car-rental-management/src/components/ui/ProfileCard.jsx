import { styled } from "styled-components";
import { Image } from "./ImageComp";
import { ImageDiv, ProfileDiv } from "./StyledDiv";


const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  color: var(--color-secondary-main);
`;
export default function ProfileCard(props) {
  return (
    <ProfileDiv>
      <ImageDiv>
        <Image
          variation="rounded"
          src={props.urlPhoto ? props.urlPhoto : "/profile-pic.png"}
        />
      </ImageDiv>

      <InfoDiv>
        <span> {props.name} </span>
        <Span> {props.role} </Span>
      </InfoDiv>
    </ProfileDiv>
  );
}
