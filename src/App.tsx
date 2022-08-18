import Footer from "./components/static/Footer/Footer"
import Navbar from "./components/static/Navbar/Navbar"
import Home from "./pages/Home/Home"

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
