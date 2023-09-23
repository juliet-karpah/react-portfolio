import { createContext } from "react";
import { styled } from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;



const StyledList = styled.ul`
  position: fixed;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const MenuContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenuContext.Provider
      value={{ openId, position, open, setPosition, close }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenuContext);

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}



Menus.Menu = Menu;
Menus.List = List;
Menus.Button = Button;

export default Menus;