/* eslint-disable react/jsx-no-undef */
import { Formik , Form, Field} from "formik"
import Modal from "./Modal"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import {db} from "../config/firebase"
import { toast } from "react-toastify"
import * as Yup from "yup"
import { ErrorMessage } from 'formik';


const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const AddAndUpdateContact = ({isOpen,onClose,isUpdate, contact}) => {


  const addContact = async (contact) =>{
    try {
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef, contact);
            toast.success("contact added successfully");
      
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  
  const updateContact = async (contact,id) =>{
    try {
      const contactRef = doc(db,"contacts",id);
      await updateDoc(contactRef, contact);
      toast.success("contact updated successfully");

      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
       <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
      validationSchema={contactSchemaValidation}
      initialValues= 
      {
        isUpdate ?{
        name: contact.name,
        email: contact.email,
      } :
        {
        name: "",
        email: "",
      }
    }
      onSubmit={(values)=> {
        console.log(values);
        isUpdate ? updateContact(values,contact.id)
        :
        addContact(values);

      }}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex  flex-col gap-1">
          <label htmlFor="name">  Name  </label>
          <Field name="name" className="h-10 border"/>
          <div className="">
            <ErrorMessage name="name" component="div" className="text-red-500"/>
          </div>
          </div>
          <div className="flex  flex-col gap-1">
          <label htmlFor="email">  Email  </label>
          <Field name="email" className="h-10 border"/>
          <div className="">
            <ErrorMessage name="email" component="div" className="text-red-500"/>
            </div>
          </div>
          <button className="bg-amber-500 px-3 py-1.5 border self-end">
            {isUpdate ? "update" :"add"} Contact</button>
        </Form>
      </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdateContact
