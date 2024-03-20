import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const userName = localStorage.getItem('userName')
  const email = localStorage.getItem('email')
  const userLogin = localStorage.getItem('userLogin')

    useEffect(()=>{
      // alert(userLogin)

      if(userLogin === 'false' || userLogin === null){
        navigate('/login')
      }


    })


    const logout =()=>{
       localStorage.clear()
       navigate('/login')
       localStorage.setItem('userLogin',false)
    }
  return (
    <div className='home'>
      <h2>home</h2>
       
      <p>hello  {userName} : your email is {email} </p>
      <button onClick={logout} >logOut</button>
    </div>
  )
}

export default Home
