import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Edit() {

    const [id,setId]=useState(0)
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    const handleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`https://641c27521a68dc9e4601cd3d.mockapi.io/crud/${id}`,{
            myname:name,
            myage:age,
            myemail:email,
            mypassword:password
        })
        .then(()=>{
            navigate('/')
        })
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{
        setId(localStorage.getItem('l_id'))
        setName(localStorage.getItem('l_name'))
        setAge(localStorage.getItem('l_age'))
        setEmail(localStorage.getItem('l_email'))
        setPassword(localStorage.getItem('l_password'))
    },[])

  return (
    <>
        <Link to='/'>
            <button className='btn btn-primary my-3'>See Data</button>
        </Link>

        <div className='container'>

        <form onSubmit={handleUpdate}>
        <label>Name : </label>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/><br/>
        <label>Age : </label>
        <input type="number" placeholder='Enter your age'value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br/><br/>
        <label>Email : </label>
        <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/><br/>
        <label>Password : </label>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/><br/>

        <input type="submit" value='Update' />

        </form>

    </div>
   
   </>
  )
}
