import { BrowserRouter, Route, Routes } from "react-router-dom"

import Footer from "./components/static/Footer/Footer"
import Navbar from "./components/static/Navbar/Navbar"

import { AuthProvider } from "./contexts/AuthContext"

import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import ListaTema from "./pages/ListaTemas/ListaTemas"
import ListaPostagens from "./pages/ListaPostagens/ListaPostagens"
import DeletarTema from "./components/Temas/DeletarTema/DeletarTema"
import FormularioTema from "./components/Temas/FormularioTema/FormularioTema"
import DeletarPostagem from "./components/Postagens/DeletarPostagem/DeletarPostagem"
import FormularioPostagem from "./components/Postagens/FormularioPostagem/FormularioPostagem"

import './App.css'

function App() {
  return (
    // <AuthProvider>
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

            <Route path="/formularioPostagem" element={<FormularioPostagem />} />

            <Route path="/formularioPostagem/:id" element={<FormularioPostagem />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          </Routes>

        </div>

        <Footer />
      </ BrowserRouter>
    // </ AuthProvider>
  )
}

export default App
