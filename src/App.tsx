import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import AdminPanel from './pages/AdminPanel'
import AdminLogin from './pages/AdminLogin'

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route 
              path="/admin" 
              element={isAdminLoggedIn ? <AdminPanel /> : <Navigate to="/admin-login" />} 
            />
            <Route 
              path="/admin-login" 
              element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App