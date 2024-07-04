import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage.jsx";
import Login1 from "./components/LoginPage1.jsx"
import Home from "./components/Home.jsx"
function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/codechef-login-page/'}>
    <Routes>
      
        
        <Route path="/" element={<Login1 />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/home" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;