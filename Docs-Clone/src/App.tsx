import { useEffect } from 'react'
import { auth } from './firebase-config'
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'

import './App.css'
import { TexxtEditor } from './components/text-editor';

function App() {
useEffect(() => {
  signInAnonymously(auth);
  onAuthStateChanged(auth,user => {
    if(user){
      console.log(`User Signed in: `,user.uid);
    }
  })
},[]);

  return (
   <div className="App">
    <header>
      <h1>Google Docs Clone</h1>
    </header>
    <TexxtEditor/>
   </div>
  )
}

export default App
