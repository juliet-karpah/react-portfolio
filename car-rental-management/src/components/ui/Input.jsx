import { styled } from "styled-components";
import { Label } from "./Label";
import { Error } from "./Form";

export const InputEL = styled.input`
  border: none;
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  background: #f2f3f5;
  width: 300px;
`;

export const FileInput = styled.input.attrs({ type: "file" })`
  border: none;
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  background: #f2f3f5;
  width: 300px;
`;
export const DIV = styled.div`
  margin: 0.5rem 0.1rem;
`;

export default function Input({
  label,
  registerFn,
  value,
  type,
  errorMessage,
  onChange
}) {
  return (
    <DIV>
      <Label> {label} </Label>
      <InputEL type={type} {...registerFn} value={value} onChange={onChange} />
      <Error> {errorMessage} </Error>
    </DIV>
  );
}
