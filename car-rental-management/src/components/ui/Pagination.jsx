import { PAGE_SIZE } from "../../services/constants";
import { Button } from "./Button";
import ButtonGroup from "./ButtonGroup";
import { StyledRow } from "./StyledDiv";
import { useSearchParams } from "react-router-dom";



export default function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageNumbers = Math.ceil(count / PAGE_SIZE);
  if (pageNumbers <= 1) return null;

  const handleNextPage = () => {
    const nextPage =
      currentPage === pageNumbers ? currentPage : currentPage + 1;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  };

  const handlePrevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  return (
    <StyledRow>
      <p>
        Showing <span> {(currentPage - 1) * PAGE_SIZE}</span> to{" "}
        <span> {currentPage * PAGE_SIZE} </span> of{" "}
        <span> {count} results</span>
      </p>
      <ButtonGroup>
        <Button primary onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </Button>
        <Button
          secondary
          onClick={handleNextPage}
          disabled={currentPage === pageNumbers}
        >
          Next{" "}
        </Button>
      </ButtonGroup>
    </StyledRow>
  );
}
