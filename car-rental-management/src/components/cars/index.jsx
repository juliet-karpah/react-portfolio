import { H2 } from "../ui/H2";
import { StyledDiv } from "../ui/StyledDiv";
import Table, { TableData, RowData, TableDataStatus } from "../ui/Table";
import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/requests/api-cars";
import { Image } from "../ui/image";
import { Button } from "../ui/Button";
import { useState } from "react";
import { ModalDiv } from "../ui/Modal";
import AddCars from "./CreateCarForm";
import { useArchiveCar } from "../../hooks/archiveCar";
import { tableTitleCars } from "../../staticData";

export default function Cars() {

  const { isLoading, data } = useQuery(["carData"], getCars);
  const [openModal, setOpenModal] = useState(false);

  const { mutate } = useArchiveCar();
  return (
    <StyledDiv>
      <H2>
        {" "}
        Cars{" "}
        <Button primary onClick={() => setOpenModal(true)}>
          {" "}
          Add Car{" "}
        </Button>
      </H2>
      <Table tableTitle={tableTitleCars}>
        {openModal && (
          <ModalDiv>
            <AddCars closeModal={() => setOpenModal(false)} />
          </ModalDiv>
        )}
        {!isLoading ? (
          <tbody>
            {data.map((data, id) => (
              <RowData key={id}>
                <TableData>
                  <Image variation="small" src={data.image} />
                </TableData>
                <TableData>{data.name}</TableData>
                <TableData>{data.maxCapacity}</TableData>
                <TableData>{data.type}</TableData>
                <TableData>{data.model}</TableData>
                <TableData>${data.price}/hr</TableData>
                <TableDataStatus
                  status={data.available ? "available" : "rented"}
                >
                  {data.available ? "available" : "rented"}
                </TableDataStatus>
                <TableData>
                  {" "}
                  <Button
                    disabled={data.available == false}
                    $secondary
                    onClick={() => mutate(data.id)}
                  >
                    Archive{" "}
                  </Button>{" "}
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
