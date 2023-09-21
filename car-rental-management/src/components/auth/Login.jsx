import useLogin from "../../hooks/useLogin";
import { ButtonInit } from "../ui/Button";
import { Form } from "../ui/Form";
import { H1 } from "../ui/H1";
import Input from "../ui/Input";
import { email, password } from "../../services/config";

export default function LoginForm() {
  const { login, isLoading } = useLogin();

  const handleSubmit = (error) => {
    error.preventDefault();
    login({ email, password });
  };
  return (
    <Form width={"300px"} onSubmit={handleSubmit}>
      <H1> Login as Admin </H1>
      <Input
        value={email}
        type="email"
        label="Email"
        disabled={isLoading}
      />
      <Input
        value={password}
        type="password"
        label="Password"
        disabled={isLoading}
      />
      <ButtonInit type="submit" primary={true}>
        {!isLoading ? "Login" : "loading..."}
      </ButtonInit>
    </Form>
  );
}
