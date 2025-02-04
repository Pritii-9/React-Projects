import { FiSearch } from "react-icons/fi"
import Navbar from "./components/Navbar"
import { AiFillPlusCircle } from "react-icons/ai"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import {db} from "./config/firebase";
import ContactCard from "./components/ContactCard"
import AddAndUpdateContact from "./components/AddAndUpdateContact"

const App = () => {

  const [contacts,setContacts] = useState([]);  
  const [isOpen , setOpen] = useState(false);

  const onOpen = () =>{
    setOpen(true);
  };
  const onClose = () =>{
    setOpen(false);
  };

  useEffect( () => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db,"contacts");
        const contactsSnapshot = await getDocs(contactsRef);

        const contactsList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        setContacts(contactsList);

      } catch (error) {
        console.log(error);
      }
    }
    getContacts();
  },[]);

  return (
    <>
    <div className="px-4 max-w-[370px] mx-auto">
      <Navbar/>
     <div className="flex gap-2">
     <div className="relative flex flex-grow items-center">
        <FiSearch className="absolute ml-1 text-white text-3xl"/>
        <input type="text" className="h-10 pl-9 text-white flex-grow border bg-transparent border-white rounded-md" />
      </div>
      <div>
        <AiFillPlusCircle onClick={onOpen} className="text-5xl cursor-pointer text-white"/>
      </div>
     </div>
     <div className="mt-4 gap-3 flex flex-col">
      {
      contacts.map((contact) => (
        <ContactCard  key={contact.id} contact={contact}/>
      ))
      }
      </div>
    </div>
   <AddAndUpdateContact onClose={onClose}
   isOpen={isOpen}/>
    </>
  )
}

export default App
