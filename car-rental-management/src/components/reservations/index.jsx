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
import { useQuery } from "react-query";
import { getReservations } from "../../services/requests/api-reservations";
import { getRenters } from "../../services/requests/api-renters";
import { getCars } from "../../services/requests/api-cars";
import { calculatePrice, getOne } from "../../services/helper-functions/shared";
const tableTitle = [
  { title: "" },
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
          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  { title: "Car" },
  { title: "STATUS" },
  { title: "Duration(hr)" },
  { title: "amount" },
];


export default function Reservations() {

  const { isLoading, data: reservations } = useQuery(
    "reservations",
    getReservations
  );

  const { data: renters } = useQuery(
    "renters",
    getRenters
  );

  const { data: cars } = useQuery(
    "cars",
    getCars
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
                  <TableData>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </TableData>
                  <TableData>{retrieveTime(data["startTime"])}</TableData>
                  <TableData>{getOne(renters, data["renter_id"])['full_name']}</TableData>
                  <TableData>{getOne(renters, data["renter_id"])['phone']}</TableData>
                  <TableData>{data['car_id']}</TableData>
                  <TableDataStatus status={data.status}>
                    {data.status}
                  </TableDataStatus>
                  <TableData>
                    {hours(data["startTime"], data["endTime"])}
                  </TableData>
                  <TableData>${calculatePrice(getOne(cars, data["renter_id"])['price'], hours(data["startTime"], data["endTime"]))}</TableData>
                </RowData>
              ))}
            </tbody>
          </Table>
        )}
      </StyledDiv>
    </LocalizationProvider>
  );
}
