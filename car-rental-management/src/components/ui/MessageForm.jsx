import { Button } from "./Button";
import { Textarea } from "./Textarea";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addChat } from "../../services/requests/api-chats";
import toast from "react-hot-toast";


const FormGroup = styled.form`
  display: flex;
  gap: 20px;
  margin: 20px;
  align-items: center;
`;
const MessageFormEL = styled(FormGroup)`
  position: relative;
  top: 10%;
`;

export default function MessageForm({ currentUser }) {
  const { register, reset, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data) =>
      addChat({ message: data.message, to: currentUser.id }),
    onSuccess: () => {
      toast.success("message sent");
      reset()
      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });
    },
    onError: () => {
      toast.error("failed to send message");
    },
  });
  return (
    <MessageFormEL onSubmit={handleSubmit(mutate)}>
      <Textarea size="small" {...register("message")} />
      <Button primary type="submit">
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
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </Button>
    </MessageFormEL>
  );
}
