import { styled } from "styled-components";
import { Label } from "./Label";

const SelectEl = styled.select`
  border: none;
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  background: #f2f3f5;
  width: 320px;
  display: block;
`;

const DIV = styled.div`
  margin: 0.5rem 0.1rem;
`;

export default function Select({ options, label, register, required }) {
  return (
    <DIV>
      <Label> {label}</Label>
      <SelectEl {...register(label, { required: required })}>
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </SelectEl>
    </DIV>
  );
}
