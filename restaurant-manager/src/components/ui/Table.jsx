import { styled } from "styled-components";

const TableEL = styled.table`
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

export const RowData = styled(TableRow)`
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
  text-transform: uppercase;
`;

export const TableData = styled.td`
  width: 200px;
  text-align: center;
  text-transform: Capitalize;
`;

export const TableDataStatus = styled(TableData)`
  color: ${(props) =>
    (["canceled", "bad"].includes(props.status))
      ? "var(--color-primary-variant-light)"
      : "var(--color-secondary-main)"};
`;

export default function Table(props) {
  return (
    <TableEL>
      <thead>
        <TableRow>
          {props.tableTitle.map((title, i) => (
            <TableHeader key={i}>{title.title}</TableHeader>
          ))}
        </TableRow>
      </thead>
      {props.children}
    </TableEL>
  );
}
