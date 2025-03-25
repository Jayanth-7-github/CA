import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Pages/Home"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import InventoryForm from './components/InventoryForm'
import InventoryItem from "./components/InventoryItem"
import InventoryList from './components/InventoryList'
import Navigation from './components/Navigation'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/form" element={InventoryForm}></Route>
        <Route path="/list" element={InventoryList}></Route>
        <Route path="/item" element={InventoryItem}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
