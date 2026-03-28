import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Membership from "./pages/Membership"
import About from "./pages/About"
import Apply from "./pages/Apply"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/events"     element={<Events />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about"      element={<About />} />
        <Route path="/apply"      element={<Apply />} />
      </Routes>
      <Footer />
    </Router>
  )
}