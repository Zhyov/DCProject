import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Test from "./components/Test"
import About from "./components/About"

export default function App() {
  return (
    <Routes>
      <Route path="/DCProject/" element={<Home />} />
      <Route path="/DCProject/test" element={<Test />} />
      <Route path="/DCProject/about" element={<About />} />
    </Routes>
  )
}