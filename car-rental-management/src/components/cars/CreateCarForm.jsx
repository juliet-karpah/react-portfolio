import { useForm } from "react-hook-form";
import { Form } from "../ui/Form";
import Input, { FileInput } from "../ui/Input";
import Select from "../ui/Select";
import { Button } from "../ui/Button";
import ButtonGroup from "../ui/ButtonGroup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { H1 } from "../ui/H1";
import { toast } from "react-hot-toast";
import { supabaseUrl } from "../../services/supabase";
import { Label } from "../ui/Label";
import { useState } from "react";
import { addCar } from "../../services/requests/api-cars";
import { uploadImage } from "../../services/requests/shared";

export default function AddCars(props) {
  const { register, handleSubmit, reset, formState } = useForm();
  const [image, setImage] = useState();
  const { errors } = formState;

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const AddCar = async (data) => {
    const imageURL = `${supabaseUrl}/storage/v1/object/public/cars/${image.name}`;
    // upload image
    await uploadImage("cars", image.name, image);

    //if successful add car
    await addCar(data, imageURL);
    // props.closeModal();
  };

  const onError = (err) => {
    console.log(err);
  };
  const queryClient = useQueryClient();

  const { mutate: addNewCar } = useMutation({
    mutationFn: AddCar,
    onSuccess: () => {
      toast.success("New car added");
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
      reset();
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
          registerFn={register(ct.label, {
            required: `${ct.label} is required`,
          })}
          type={ct.text}
          required
          errorMessage={errors[ct.label]?.message}
        />
      ))}

      <Select
        options={["2", "4", "6"]}
        register={register}
        label="Capacity"
        required={`Capacity is required`}
      />
      <Select
        options={["Convertible", "Electric", "SUV"]}
        register={register}
        label="Type"
        required={`Type is required`}
      />
      <Label> Image</Label>
      <FileInput onChange={handleImageChange} />
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
