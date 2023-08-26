import { StyledDiv } from "../ui/StyledDiv";
import { styled } from "styled-components";
import { useLoaderData } from "react-router-dom";
import ReservationTable from "../ui/Table";

const H2 = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-self: center;
`;

export default function Reservations() {
  const res = useLoaderData();
  console.log(res);

  return (
    <StyledDiv>
      <H2>Reservations <span>
        August 26, 2023
        </span></H2>
      <ReservationTable />
    </StyledDiv>
  );
}
