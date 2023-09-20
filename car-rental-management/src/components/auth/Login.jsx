import useLogin from "../../hooks/useLogin";
import { Button } from "../ui/Button";
import { Form } from "../ui/Form";
import { H1 } from "../ui/H1";
import Input from "../ui/Input";

export default function LoginForm() {
  const { login, isLoading } = useLogin();

  const handleSubmit = (error) => {
    error.preventDefault();
    const email = "juliet@example.com";
    const password = "test123";
    login({ email, password });
  };
  return (
    <Form width={"300px"} onSubmit={handleSubmit}>
      <H1> Login as Admin </H1>
      <Input
        placeholder="email"
        type="email"
        label="Email"
        disabled={isLoading}
      />
      <Input
        placeholder="password"
        type="password"
        label="Password"
        disabled={isLoading}
      />
      <Button type="submit" primary={true}>
        {!isLoading ? "Login" : "loading..."}
      </Button>
    </Form>
  );
}
