import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/requests/api-auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    error,
    isLoading,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/metrics");
    },
    onError: () => toast.error("Login failed"),
  });
  return { login, error, isLoading };
}
