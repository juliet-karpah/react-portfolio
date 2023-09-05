import { Button } from "../ui/Button";
import { Form } from "../ui/Form";
import { H1 } from "../ui/H1";
import Input  from "../ui/Input";

export default function LoginForm() {
  return (
    <Form width={"300px"}>
      <H1> Login as Admin </H1>
      <Input placeholder="email" type="email" label="Email"/>
      <Input placeholder="password" type="password" label="Password"/>
      <Button primary={true}>Login</Button>
    </Form>
  );
}
