import { useState } from 'react'
import Auth from './pages/Auth'
import { Routes, Route } from "react-router-dom"

function App() {

  return <Routes>
    <Route path="/login" element={<Auth />} />
  </Routes>
}

export default App
