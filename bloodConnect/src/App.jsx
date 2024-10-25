import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { LoginProvider } from './contexts/loginContext'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {


  return (
   <>
    <Header/>
    <Login/>
    <Footer/>
   </>
  )
}

export default App
