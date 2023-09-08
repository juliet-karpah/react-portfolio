import { Button } from "../ui/Button";
import Modal from "../ui/Modal";
import AddCars from "./CreateCarForm";


export default function AddCarButton(){
    return (
        <Modal>
        <Modal.Open opens="add-car">
        <Button primary>
          {" "}
          Add Car{" "}
        </Button>
        </Modal.Open>
        <Modal.Window name="add-car">
            <AddCars />
        </Modal.Window>
    </Modal>
    )

}