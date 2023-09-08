
import { Button } from "../ui/Button";
import Modal from "../ui/Modal";
import ConfirmArchive from "./ConfirmArchive";

export default function Archive(props) {

  return (
    <Modal>
      <Modal.Open opens="archive-car">
      <Button disabled={props.data.available == false} $secondary>
          Archive
        </Button>
      </Modal.Open>
      <Modal.Window name="archive-car">
        <ConfirmArchive data={props.data} />
      </Modal.Window>
    </Modal>
  );
}
