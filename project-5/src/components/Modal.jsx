/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) throw new Error("Modal root element not found");

  return createPortal(
    <>
      {isOpen && (
        <div
         className="backdrop-blur-md grid place-items-center z-40 h-screen w-screen absolute top-0">
          <div className="relative m-auto min-h-[200px] z-50 min-w-[80%] p-4 bg-white">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl self-end" />
            </div>
            {children}
          </div>
      
        </div>
      )}
    </>,
    modalRoot
  );
};

export default Modal;
