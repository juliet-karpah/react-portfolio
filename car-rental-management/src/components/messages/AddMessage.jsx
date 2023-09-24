import styled from "styled-components";
import { ButtonInit } from "../ui/Button";
import Modal from "../ui/Modal";
import ProfileCard from "../ui/ProfileCard";
import IconButton from "../ui/StyledButton";
import UseRenters from "../../hooks/useRenters";
import { DIV } from "../ui/Message";
import { H2 } from "../ui/H2";
import toast from "react-hot-toast";

export const StyledList = styled.ul`
  background-color: white;
  width: 40%;
  position: fixed;
  border-radius: var(--border-radius-md);
`;

export default function AddMessageButton(props) {
  const { renters } = UseRenters();

  const handleOnClick = (id) => {
    props.onClick(id);
    props.closeModal;
    toast.success("success! close modal and chat")
  };

  return (
    <Modal>
      <Modal.Open opens="add-message">
        <IconButton
          icon={
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          }
        />
      </Modal.Open>
      <Modal.Window name="add-message">
        <StyledList>
          <H2> Renters </H2>
          <DIV>
            {renters?.map((renter, i) => (
              <ButtonInit
                message
                key={i}
                onClick={()=> handleOnClick(renter.id)}
                type="reset"
              >
                <ProfileCard urlPhoto={renter.image} name={renter.full_name} />
              </ButtonInit>
            ))}
          </DIV>
        </StyledList>
      </Modal.Window>
    </Modal>
  );
}
