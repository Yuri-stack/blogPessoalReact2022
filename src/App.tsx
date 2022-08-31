import { BrowserRouter, Route, Routes } from "react-router-dom"

import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Cadastro from "./pages/Cadastro/Cadastro"
import ListaTema from "./pages/ListaTemas/ListaTemas"
import ListaPostagem from "./pages/ListaPostagem/ListaPostagem"

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ minHeight: '100vh' }}>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/postagens" element={<ListaPostagem />} />
        </Routes>

      </div>

      <Footer />
    </ BrowserRouter>
  )
}

export default App
