import { Button } from "../ui/Button";
import { Form } from "../ui/Form";
import { Input } from "../ui/Input";
import { styled } from "styled-components";

const H1 = styled.h2`
  color: #000000;
  font-weight: 500;
`;

export default function LoginForm() {
  return (
    <Form width={"300px"}>
      <H1> Login as Admin </H1>
      <Input placeholder="email" type="email" />
      <Input placeholder="password" type="password" />
      <Button primary={true}>Login</Button>
    </Form>
  );
}
