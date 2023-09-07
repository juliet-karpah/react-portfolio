import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { archiveCar } from "../services/requests/api-cars";

export const useArchiveCar = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id) => archiveCar(id),
    onSuccess: () => {
      toast.success("Car Archived!");
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
    onError: () => {
      toast.error("This is an error!");
    },
  });
  return { mutate };
};
