import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import './Component/Common/LoginRegister.css'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'

const App = () => {
  const myrout=createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route/>
    </Route>
  ))
  return (
    <div>
       <RouterProvider router={myrout} />
    </div>
  )
}

export default App
