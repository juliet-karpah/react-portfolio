import { H2 } from "../ui/H2";
import { StyledDiv } from "../ui/StyledDiv";
import Table, { TableData, RowData, TableDataStatus } from "../ui/Table";
import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/requests/api-cars";
import { Image } from "../ui/ImageComp";

import { tableTitleCars } from "../../staticData";
import AddCarButton from "./AddCar";
import Archive from "./Archive";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Cars() {
  const { isLoading, data } = useQuery({queryKey:["carData"], queryFn:getCars});
  const [searchParams, setSearchParams] = useSearchParams();
  const [test, setTest] = useState({ maxCapacity: "up", price: "up" })

  const handleSortData = (key) => {
    searchParams.set("sortBy", key);
    setSearchParams(searchParams);
    if(test[key] == "up"){
      data.sort((a, b) => a[key] - b[key])
      setTest(prevState => ({
        ...prevState, [key]:"down"
      }))
      return
    }else{
      data.sort((a, b) => b[key] - a[key]);
      setTest(prevState => ({
        ...prevState, [key]:"up"
      }))
    }
  };

  return (
    <StyledDiv>
      <H2>
        {" "}
        Cars <AddCarButton />
      </H2>
      <Table tableTitle={tableTitleCars} sortData={handleSortData}>
        {!isLoading ? (
          <tbody>
            {data.map((data, id) => (
              <RowData key={id}>
                <TableData>
                  <Image variation="small" src={data.image} />
                </TableData>
                <TableData>{data.name}</TableData>
                <TableData> {data.maxCapacity}</TableData>
                <TableData>{data.type}</TableData>
                <TableData>{data.model}</TableData>
                <TableData>${data.price}/hr</TableData>
                <TableDataStatus
                  status={data.available ? "available" : "rented"}
                >
                  {data.available ? "available" : "rented"}
                </TableDataStatus>
                <TableData>
                  <Archive data={data} />
                </TableData>
              </RowData>
            ))}
          </tbody>
        ) : (
          <div> Loading... </div>
        )}
      </Table>
    </StyledDiv>
  );
}
