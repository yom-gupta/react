import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase'


const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPas] = useState('')
    const [userName,setuserN] = useState('')
    const navigate = useNavigate()
    
    
    const submitHandler = (event) =>{
        event.preventDefault()
        

        const auth = getAuth(app)
        signInWithEmailAndPassword(auth,email,password,userName)
        .then(userData=>{
          localStorage.setItem('email',email)
        localStorage.setItem('userName',userName)
        localStorage.setItem('userLogin',true)
          navigate('/Home')
        })


   

    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} name="" placeholder='email' id="" />
            <br />
            <input type="password" onChange={(e)=>setPas(e.target.value)}  name="" placeholder='password' id="" />
            <br />
            <input type="text" onChange={(e)=>setuserN(e.target.value)} placeholder='user_name' name="" id="" />
            <br />
            <input type="submit" value="submit" />
        </form>
        <Link to={'/Signup'} >Signup</Link>
    </div>
  )
}

export default Login
