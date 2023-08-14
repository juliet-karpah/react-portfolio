import LoginForm from "../components/auth/Login";
import { styled } from "styled-components";

const LoginLayout = styled.main`
display: flex;
justify-content: center;
min-height: 100vh;
`

export default function LoginPage(){
    return(
        <LoginLayout>
            <LoginForm />
        </LoginLayout>
    )
}