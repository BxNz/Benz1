import { useState, useEffect } from "react";
import Homepage from "./page/Homepage";
import Product from "./page/Product";
import About from "./page/About";
import Learning from "./page/Learning";
import Original from "./page/Original";
import Profiel from "./page/Profiel";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setisLogin(true);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar isLogin={isLogin} setisLogin={setisLogin} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/original" element={<Original />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiel" element={<Profiel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
