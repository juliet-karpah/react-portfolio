import { H2 } from "../ui/H2";
import { StyledDiv } from "../ui/StyledDiv";
import Table, { TableData, RowData, TableDataStatus } from "../ui/Table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { archiveCar, getCars } from "../../services/requests/api-cars";
import { Image } from "../ui/image";
import { Button } from "../ui/Button";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { ModalDiv } from "../ui/Modal";
import AddCars from "./CreateCarForm";

export default function Cars() {
  const tableTitle = [
    {
      title: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
          <path
            fillRule="evenodd"
            d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    { title: "Name" },
    { title: "Capacity" },
    { title: "Type" },
    { title: "Model" },
    { title: "Rate" },
    { title: "Availability" },
    { title: "" },
  ];

  const { isLoading, data } = useQuery(["carData"], getCars);
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id) => archiveCar(id),
    onSuccess: () => {
      toast.success("Car Archived!");
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
    onError: () => {
      toast.error("This is an error!");
    },
  });

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
      <Table tableTitle={tableTitle}>
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
