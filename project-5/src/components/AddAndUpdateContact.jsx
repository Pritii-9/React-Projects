import { Formik , Form} from "formik"
import Modal from "./Modal"
const AddAndUpdateContact = ({isOpen,onClose}) => {
  return (
    <div>
       <Modal isOpen={isOpen} onClose={onClose}>
      <Formik>
        <Form>

        </Form>
      </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdateContact
