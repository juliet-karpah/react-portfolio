import { H2 } from "../ui/H2";
import { StyledDiv } from "../ui/StyledDiv";
import Table, { RowData, TableData } from "../ui/Table";
import ProfileCard from "../ui/ProfileCard";
import { retrieveDate } from "../../services/helper-functions/date";
import { tableTitleRenter } from "../../staticData";
import Pagination from "../ui/Pagination";
import UseRenters from "../../hooks/useRenters";

export default function Renters() {

  const {renters, count, isLoading} = UseRenters()

  return (
    <StyledDiv>
      <H2>Renters</H2>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Table tableTitle={tableTitleRenter}>
          <tbody>
            {renters.map((renter, i) => (
              <RowData key={i}>
                <TableData>
                  <ProfileCard
                    urlPhoto={renter.image}
                    name={renter.full_name}
                  />
                </TableData>
                <TableData>{renter.phone}</TableData>
                <TableData>{renter.email}</TableData>
                <TableData>{retrieveDate(renter.created_at)}</TableData>
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
      <Pagination count={count}/>

    </StyledDiv>
  );
}
