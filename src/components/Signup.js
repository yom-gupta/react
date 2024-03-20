import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPass] = useState('')
    const [userName,setuserN] = useState('')    
    const navigate = useNavigate()


    const submitHandler = (event) =>{
    event.preventDefault();
    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth,email,password,userName)
    .then(res=>{
         navigate('/Login')
    })

  

    }
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={submitHandler}>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} name="" placeholder='email' id="" />
            <br />
            <input type="password" onChange={(e)=>setPass(e.target.value)}  name="" placeholder='password' id="" />
            <br />
            <input type="text" onChange={(e)=>setuserN(e.target.value)} placeholder='user_name' name="" id="" />
            <br></br>
            <input type="submit" value="submit" />
        </form>
        <Link to={'/Login'}>Login</Link>
    </div>
  )
}

export default Signup
