import { getRenters } from "../../services/requests/api-renters";
import { H2 } from "../ui/H2";
import { StyledDiv } from "../ui/StyledDiv";
import { useQuery } from "@tanstack/react-query";
import Table, { RowData, TableData } from "../ui/Table";
import ProfileCard from "../ui/ProfileCard";
import { retrieveDate } from "../../services/helper-functions/date";
import { useState } from "react";
import ButtonGroup from "../ui/ButtonGroup";
import { Button } from "../ui/Button";
import { tableTitleRenter } from "../../staticData";



export default function Renters() {
  const [from, setFrom] = useState(0);

  const { data: renters, isLoading } = useQuery({
    queryKey: ["renters", from],
    queryFn: () => getRenters(from),
    keepPreviousData: true,
  });

  const handleNextPage = () => {
    let total = 10;
    let temp = from;
    const cond = total / (temp + 1) - 4;
    if (cond > 0) {
      const res = temp + 4;
      setFrom(res);
    }
  };

  const handlePrevPage = () => {
    let temp = from;
    if (temp > 0) {
      const res = temp - 1;
      setFrom(res);
    }
  };
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
      <ButtonGroup>
        <Button primary onClick={handlePrevPage}>
          Prev
        </Button>
        <Button secondary onClick={handleNextPage}>
          Next{" "}
        </Button>
      </ButtonGroup>
    </StyledDiv>
  );
}
