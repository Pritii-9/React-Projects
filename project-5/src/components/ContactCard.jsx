/* eslint-disable react/prop-types */
import { HiOutlineUserCircle } from "react-icons/hi"
import { RiEditCircleLine } from "react-icons/ri"
import { IoMdTrash } from "react-icons/io"
const ContactCard = ({contact}) => {
  return (
    <div key={contact.id} className="bg-yellow-200 flex items-center justify-between rounded-lg p-2"> 
        <div className="flex gap-1">
        <HiOutlineUserCircle className="text-4xl text-orange-400"/>
        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine className=""/>
          <IoMdTrash className="text-orange-400"/>
        </div>
        </div>
  )
}

export default ContactCard
