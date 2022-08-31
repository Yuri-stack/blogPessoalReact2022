import { BrowserRouter, Route, Routes } from "react-router-dom"

import Footer from "./components/static/Footer/Footer"
import Navbar from "./components/static/Navbar/Navbar"

import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import ListaTema from "./pages/ListaTemas/ListaTemas"
import ListaPostagens from "./pages/ListaPostagens/ListaPostagens"
import DeletarTema from "./components/Temas/DeletarTema/DeletarTema"
import FormularioTema from "./components/Temas/FormularioTema/FormularioTema"

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

          <Route path="/postagens" element={<ListaPostagens />} />

          <Route path="/formularioTema" element={<FormularioTema />} />

          <Route path="/formularioTema/:id" element={<FormularioTema />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>

      </div>

      <Footer />
    </ BrowserRouter>
  )
}

export default App
