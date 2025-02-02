import './App.css'
import Navbar from './components/Navbar/Navbar'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'
function App() {

  return (
   <div>
    <Navbar />
    <main className='main_container'>
    <ContactHeader />
    <ContactForm/>
    </main>
   </div>
  )
}

export default App
