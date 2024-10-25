import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
function Layout() {
  return (
    <>
    <UserProvider>
    <Header />
    <Outlet />
    <Footer />
    </UserProvider>
    </>
  )
}

export default Layout