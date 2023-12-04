import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={"Dashboard"} /> */}
          <Route path="/Contact" element={"Contact"} />
        </Routes>
      </Router>
    </>
  )
}
export default App