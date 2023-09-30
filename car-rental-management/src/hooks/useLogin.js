import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/requests/api-auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
 

  const {
    mutate: login,
    error,
    isLoading,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      if(user.user.aud == "authenticated"){
        queryClient.setQueryData(["user"], user.user);
        navigate("/metrics", {replace: true});
        toast.success("Login successful")
      }
    },
    onError: () => toast.error("Login failed"),
  });
  return { login, error, isLoading };
}
