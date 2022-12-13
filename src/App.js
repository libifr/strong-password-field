import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [allowSubmit, setAllowSubmit] = useState(false)
  const [isStrongPassword, setIsStrongPassword] = useState("weak")

  useEffect(()=>{
    if(password.length < 3) {
      setIsStrongPassword("Weak")
      setAllowSubmit(false)
    }
    if(password.length >= 3 && password.length < 7) {
      setIsStrongPassword("Medium")
      setAllowSubmit(true)

    }
    if(password.length > 7) {
      setIsStrongPassword("Strong")
      setAllowSubmit(true)
    }

  },[isStrongPassword,password,allowSubmit])


  return (
    <div className="App">
        <label>Enter Your Password:</label>
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <input type="submit" disabled={allowSubmit ? false : true}></input>
        <p>Your Password is {isStrongPassword}</p>
    </div>
  );
}

export default App;
