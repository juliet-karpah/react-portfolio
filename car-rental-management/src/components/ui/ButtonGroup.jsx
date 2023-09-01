import { styled } from "styled-components";

const ButtonDiv = styled.div`
align-self: center;
margin-bottom: 20px;
`;

export default function ButtonGroup(props) {
  return <ButtonDiv>{props.children}</ButtonDiv>;
}
