import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/profile";
import Header from "./components/header";


function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Sign-in" element={<Signin />} />
    <Route path="/Sign-up" element={<SignUp/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/profile" element={<Profile/>} />
   
  </Routes>
  </BrowserRouter>
  ) 
}

export default App