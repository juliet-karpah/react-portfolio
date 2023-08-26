import { styled } from "styled-components";
import { Image } from "./image";

const ProfileDiv = styled.div`
  height: 50%;
  display: flex;
  gap: 16px;
  align-items: center;
`;

const InfoDiv = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
`;

const SVG = styled.svg`
  color: var(--color-primary-main);
`;

const Span = styled.span`
  color: var(--color-secondary-main);
`;
export default function ProfileCard() {
  return (
    <ProfileDiv>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
          clipRule="evenodd"
        />
      </SVG>
      <Image variation="rounded" src="/profile-pic.png" />
      <InfoDiv>
        <span> Justina George </span>
        <Span> Admin </Span>
      </InfoDiv>
    </ProfileDiv>
  );
}
