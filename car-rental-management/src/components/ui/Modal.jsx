import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";

const ModalDiv = styled.div`
  position: fixed;
  background-color: white;
  border-radius: var(--border-radius-lg);
  top: 50%;
  left: 50%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => {open(opens); console.log("here")}});
}

function Window({ children, name}) {
  const { opensName, close } = useContext(ModalContext);

  if (name !== opensName) return null;

  return createPortal(
    <Overlay>
      <ModalDiv>
        <button onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div> {cloneElement(children,{closeModal: close} )} </div>
      </ModalDiv>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
