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


const tableTitle = [
  {
    title: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  { title: "Renter" },
  { title: "Car" },
  { title: "STATUS" },
  { title: "Duration(hr)" },
  { title: "amount" },
  { title: "" },
];

export default function Reservations() {
  const { isLoading, data: reservations } = useQuery(
    ["reservations"],
    getReservations
  );

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
          <Table tableTitle={tableTitle}>
            <tbody>
              {reservations.map((data, i) => (
                <RowData key={i}>
                  <TableData>{retrieveTime(data["startTime"])}</TableData>
                  <TableData>
                    {data["renter_name"]}
                  </TableData>
                  <TableData>{data["car_id"]}</TableData>
                  <TableDataStatus status={data.status}>
                    {data.status}
                  </TableDataStatus>
                  <TableData>
                    {hours(data["startTime"], data["endTime"])}
                  </TableData>
                  <TableData>
                    ${data['price']}
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
