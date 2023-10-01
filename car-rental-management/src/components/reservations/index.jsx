import { StyledDiv } from "../ui/StyledDiv";
import { H2 } from "../ui/H2";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Table, { TableData, RowData, TableDataStatus } from "../ui/Table";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  getCurrentDate,
  hours,
  retrieveTime,
} from "../../services/helper-functions/date";
import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../services/requests/api-reservations";
import { reservationTableTitle } from "../../staticData";
import { useLocation } from "react-router-dom";
import Empty from "../ui/Empty";
import Button from "../ui/StyledButton";
import { useState } from "react";
import { SVG } from "../ui/Svg";

export default function Reservations() {
  const location = useLocation();
  const [open, setOpen] = useState(false)

  const { data: reservations } = useQuery({
    queryKey: ["reservations", location.pathname],
    queryFn: () => getReservations(location.pathname),
  });

  if (!Array.isArray(reservations) || !reservations.length) {
    return <Empty resourceName={"reservations"} />;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDiv>
        <H2>
          Reservations
          <span>
            <DatePicker
              defaultValue={dayjs(getCurrentDate())}
              disablePast={true}
            />
          </span>
        </H2>
        <Table tableTitle={reservationTableTitle}>
          <tbody>
            {reservations.map((data, i) => (
              <RowData key={i}>
                <TableData>
                  <Button onClick={()=> setOpen(!open)}
                    icon={!open ? 
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
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </SVG>
                    :<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                  </SVG>
                  
                  }
                  ></Button>
                </TableData>
                <TableData>{retrieveTime(data["startTime"])}</TableData>
                <TableData>{data["renters"]["full_name"]}</TableData>
                <TableData>{data["car_id"]}</TableData>
                <TableDataStatus status={data.status}>
                  {data.status}
                </TableDataStatus>
                <TableData>
                  {hours(data["startTime"], data["endTime"])}
                </TableData>
                <TableData>
                  $
                  {data["cars"]["price"] *
                    hours(data["startTime"], data["endTime"])}
                </TableData>
              </RowData>
            ))}
          </tbody>
        </Table>
      </StyledDiv>
    </LocalizationProvider>
  );
}
