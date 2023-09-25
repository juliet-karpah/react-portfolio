import LoginForm from "../components/auth/Login";
import { styled } from "styled-components";
import { Image } from "../components/ui/Image";

const LoginLayout = styled.main`
  display: flex;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

export default function LoginPage() {
  return (
    <LoginLayout>
      <Image variation={"medium"} src="logo.png" />
      <LoginForm />
    </LoginLayout>
  );
}
