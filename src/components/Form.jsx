import { useState } from 'react'
import axios from 'axios'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'

function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
      e.preventDefault()
    axios.post('https://641c27521a68dc9e4601cd3d.mockapi.io/crud',{
      myname:name,
      myage:age,
      myemail:email,
      mypassword:password
    })

    

    .then((res)=>{console.log(res.message)})
    .catch((error)=>{console.log(error)})

    setName('')
    setAge('')
    setEmail('')
    setPassword('')
  }

  return (
   <>
    <Link to='/'><button className='btn btn-primary my-3'>See Data</button></Link>
   <div className='container'>

    <form onSubmit={handleSubmit}>
    <label>Name : </label>
    <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
    <br/><br/>
    <label>Age : </label>
    <input type="number" placeholder='Enter your age' value={age} onChange={(e)=>setAge(e.target.value)} />
    <br/><br/>
    <label>Email : </label>
    <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    <br/><br/>
    <label>Password : </label>
    <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
    <br/><br/>

    <input type="submit" value='Submit' />

    </form>

   </div>
   
   </>
  )
}

export default Form
