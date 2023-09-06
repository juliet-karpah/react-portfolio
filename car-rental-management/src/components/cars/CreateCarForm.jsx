import { useForm } from "react-hook-form";
import { Form } from "../ui/Form";
import Input from "../ui/Input";
import { Label } from "../ui/Label";
import Select from "../ui/Select";
import { Button } from "../ui/Button";
import ButtonGroup from "../ui/ButtonGroup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { H1 } from "../ui/H1";
import { toast } from "react-hot-toast";
import { addCar } from "../../services/requests/api-cars";

export default function AddCars(props) {
  const { register, handleSubmit } = useForm();

  const AddCar = async (data) => {
    await addCar(data);
    props.closeModal();
  };

  const onError = () =>{

  }
  const queryClient = useQueryClient();

  const { mutate: addNewCar } = useMutation({
    mutationFn: AddCar,
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

  const formContent = [
    {
      label: "Name",
      type: "text",
    },
    {
      label: "Model",
      type: "text",
    },
    {
      label: "Price",
      type: "number",
    },
  ];

  return (
    <Form onSubmit={handleSubmit(addNewCar, onError)}>
      <H1> Add a new car </H1>
      {formContent.map((ct, i) => (
        <Input
          key={i}
          label={ct.label}
          registerFn={register(ct.label, { required: true })}
          type={ct.text}
          required
        />
      ))}

      <Select
        options={["2", "4", "6"]}
        register={register}
        label="Capacity"
        required
      />
      <Select
        options={["Convertible", "Electric", "SUV"]}
        register={register}
        label="Type"
        required
      />

      <Label> Image </Label>
      <Input type="file" />
      <ButtonGroup>
        <Button primary type="submit">
          {" "}
          Add new car
        </Button>
        <Button onClick={props.closeModal} $secondary type="reset">
          {" "}
          Cancel
        </Button>
      </ButtonGroup>
    </Form>
  );
}
