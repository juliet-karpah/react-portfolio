import { StyledDiv } from "../ui/StyledDiv";
import { styled } from "styled-components";
import { useLoaderData } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ReservationTable from "../ui/Table";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const H2 = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-self: center;
`;

export default function Reservations() {
  const res = useLoaderData();
  console.log(res);

  const date = new Date();

  const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  console.log(today)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDiv>
        <H2>
          Reservations
          <span>
            <DatePicker defaultValue={dayjs(today)} />
          </span>
        </H2>
        <ReservationTable />
      </StyledDiv>
    </LocalizationProvider>
  );
}
