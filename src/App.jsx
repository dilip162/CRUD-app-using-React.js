import React from 'react'
import Form from './components/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './components/Read'
import Edit from './components/Edit'

export default function App() {
  return (
    <>
    
    <BrowserRouter>

    <Routes>
    <Route exact path='/' element={<Read/>} />
    <Route exact path='/form' element={<Form/>} />
    <Route exact path='/edit' element={<Edit/>} />
    </Routes>
    
    </BrowserRouter>
    

    </>
  )
}
