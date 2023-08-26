import { styled } from "styled-components";

const Table = styled.table`
  background-color: var(--color-white);
  width: 90%;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-lg);
  align-self: center;
  border-collapse: collapse;
  color: var(--color-grey-500);
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-grey-100);
`;

const RowData = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-400);
    color: var(--color-grey-100);
  }
  &:last-child {
    border: none;
  }
`;

const TableHeader = styled.th`
  font-weight: 700;
`;

const TableData = styled.td`
  width: 200px;
  text-align: center;
`;

const TableDataStatus = styled(TableData)`
color:${props => props.status == "canceled" ? "var(--color-primary-variant-light)": "var(--color-secondary-main)" };
`

export default function ReservationTable() {
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
            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
            clipRule="evenodd"
          />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
      ),
    },
    { title: "DINER" },
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
    { title: "TABLE" },
    { title: "STATUS" },
    { title: "PRICE" },
  ];

  const tableData = [
    {
      date: "03:11 PM",
      numGuests: 3,
      diner: "Juliet George",
      phone: "4156940499",
      table: "001",
      status: "paid",
      mealPrice: "$100",
      notes: "will be late",
    },
    {
      date: "03:50 PM",
      numGuests: 4,
      diner: "Priye Albert",
      phone: "4156940499",
      table: "002",
      status: "unpaid",
      mealPrice: "$200",
      notes: "will be late",
    },
    {
        date: "03:50 PM",
        numGuests: 5,
        diner: "Majolie Fotso",
        phone: "4156940499",
        table: "003",
        status: "canceled",
        mealPrice: "$500",
        notes: "will be late",
      },
  ];

  return (
    <Table>
      <thead>
        <TableRow>
          {tableTitle.map((title, i) => (
            <TableHeader key={i}>{title.title}</TableHeader>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {tableData.map((data, i) => (
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
            <TableData>{data.date}</TableData>
            <TableData>{data.numGuests}</TableData>
            <TableData>{data.diner}</TableData>
            <TableData>{data.phone}</TableData>
            <TableData>{data.table}</TableData>
            <TableDataStatus status={data.status}>{data.status}</TableDataStatus>
            <TableData>{data.mealPrice}</TableData>
          </RowData>
        ))}
      </tbody>
    </Table>
  );
}
