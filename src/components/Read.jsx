import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Read() {

    const [mydata,setMydata]=useState([])

    function getApiData(){
      axios.get('https://641c27521a68dc9e4601cd3d.mockapi.io/crud')
      .then((res)=>{setMydata(res.data)})

    }

    function handleDelete(id){

        axios.delete(`https://641c27521a68dc9e4601cd3d.mockapi.io/crud/${id}`)
        .then(()=>{
          getApiData()        
        })
        .catch((error)=>console.log(error))      
    }

    function setDataToStorage(id,name,age,email,password){
      localStorage.setItem('l_id',id)
      localStorage.setItem('l_name',name)
      localStorage.setItem('l_age',age)
      localStorage.setItem('l_email',email)
      localStorage.setItem('l_password',password)
    }

    useEffect(()=>{
      getApiData()
      handleDelete()
    },[])


  return (
    <>

      <Link to='/form'><button className='btn btn-primary my-3'>Create new data</button></Link>

      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      mydata.map((item)=>{

        return(
          <>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.myname}</td>
              <td>{item.myage}</td>
              <td>{item.myemail}</td>
              <td>{item.mypassword}</td>
              <td>
                <Link to='/edit'>
                  <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id,item.myname,item.myage,item.myemail,item.mypassword)}>Edit</button>
                </Link>
              </td>
              <td><button className='btn btn-danger' onClick={()=>{if(window.confirm("Are you sure ?")){handleDelete(item.id)}}}>Delete</button></td>
            </tr>

          </>
        )
    
      })
    }
   
  </tbody>
</table>
    
    </>

  )
}
