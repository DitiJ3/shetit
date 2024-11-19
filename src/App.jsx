import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Auth from './pages/Auth'
import Feed from './pages/Feed'
import Checklist from './pages/Checklist'

function App() {

  return <Routes>
    <Route path="/" element={<Auth />} />
    <Route path="/feed" element={<Feed />} />
    <Route path="/checklist" element={<Checklist />} />
  </Routes>
}

export default App
