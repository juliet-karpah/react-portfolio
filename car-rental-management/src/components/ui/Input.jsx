import { styled } from "styled-components";
import { Label } from "./Label";

export const InputEL = styled.input`
  border: none;
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  background: #f2f3f5;
  width: 300px;
`;

const DIV = styled.div`
margin: 0.5rem 0.1rem;
`

export default function Input({ label, registerFn, type}) {
  return (
    <DIV>
      <Label> {label} </Label>
      <InputEL type={type} {...registerFn} />
    </DIV>
  );
}
