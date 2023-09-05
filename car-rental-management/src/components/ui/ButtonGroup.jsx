import { styled } from "styled-components";

const ButtonDiv = styled.div`
align-self: center;
margin: 20px auto;
display: flex;
justify-content: space-between;
`;

export default function ButtonGroup(props) {
  return <ButtonDiv>{props.children}</ButtonDiv>;
}
