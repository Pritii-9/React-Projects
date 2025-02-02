import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { useState } from 'react'

const ContactForm = () => {

  const [name, setName] = useState("priti");
  const [email, setEmail] = useState("priti@gmail.com");
  const [text, setText] = useState("jhtrbvhg");


  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);


  }

  return (
   <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_button}>
      <Button 
      text="VIA SUPPORT CHAT" 
      icon={<MdMessage fontSize="24px" />} 
      />
      <Button 
      text="VIA CALL" 
      icon={<FaPhoneAlt fontSize="24px" />} 
      />
      </div>
      <Button 
      isOutline={true}
      text="VIA EMAIL FORM" 
      icon={<HiMail fontSize="24px" />} />

      <form action="" onSubmit={onSubmit}>
       <div className={styles.form_controller}>
       <label htmlFor="name">Name</label>
       <input type="text" name="name" />
       </div>
       <div className={styles.form_controller}>
       <label htmlFor="email">E-Mail</label>
       <input type="email" name="name" />
        </div>
        <div className={styles.form_controller}>
       <label htmlFor="text">Text</label>
       <textarea name="text" rows="8"></textarea>
        </div>
        <div style={{
          display:"flex",
          justifyContent:"end",
        }}>
        <Button text="SUBMIT" />
        </div>   
        <div>
          {
            name + " " + email + " " + text + " "
          }
        </div>
   </form>
    </div>

    <div className={styles.contact_image}>
      <img src="/assets/contact.svg" alt="contact image" />
    </div>
   </section>
  )
}

export default ContactForm
