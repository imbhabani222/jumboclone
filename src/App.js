import "./App.css"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import Ecommerce from "./components/Ecommerce/Ecommerce"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout main={<Ecommerce />} />}></Route>
    </Routes>
  )
}

export default App
