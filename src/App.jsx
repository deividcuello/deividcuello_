import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
