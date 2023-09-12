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




export default function Reservations() {

  const location = useLocation()

  const { isLoading, data: reservations } = useQuery({
    queryKey: ["reservations", location.pathname],
    queryFn: () => getReservations(location.pathname)
  });

  if(Array.isArray(reservations) && !reservations.length) return <Empty resourceName={"reservations"} />

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
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <Table tableTitle={reservationTableTitle}>
            <tbody>
              {reservations.map((data, i) => (
                <RowData key={i}>
                  <TableData>{retrieveTime(data["startTime"])}</TableData>
                  <TableData>
                    {data['renters']["full_name"]}
                  </TableData>
                  <TableData>{data["car_id"]}</TableData>
                  <TableDataStatus status={data.status}>
                    {data.status}
                  </TableDataStatus>
                  <TableData>
                    {hours(data["startTime"], data["endTime"])}
                  </TableData>
                  <TableData>
                    ${data['cars']['price'] * hours(data["startTime"], data["endTime"])}
                  </TableData>
                  <TableData>
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
                  </TableData>
                </RowData>
              ))}
            </tbody>
          </Table>
        )}
      </StyledDiv>
    </LocalizationProvider>
  );
}
