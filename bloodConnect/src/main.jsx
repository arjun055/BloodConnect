import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import User from './components/User.jsx'
import Hospital from './components/Hospital.jsx'
import BloodBankMap from './components/BloodBankMap.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Login />}/>
      <Route path='userDonate' element={<User/>}>
        <Route path='bloodBankMap' element={<BloodBankMap /> }/>
      </Route>
      <Route path='hospitalDashboard' element={<Hospital/>}/>
    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
