import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useAddCar = (addCar) => {
  const queryClient = useQueryClient();

  const { mutate: addNewCar } = useMutation({
    mutationFn: addCar,
    onSuccess: () => {
      toast.success("New car added");
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
    onError: () => {
      toast.error("Can't Add new Car");
    },
  });

  return { addNewCar };
};
