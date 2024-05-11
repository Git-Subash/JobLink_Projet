import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginPage, RegisterPage, HomePage } from "./pages/index.js";

function App() {
  const isLogin = useSelector((state) => state.isLogin);
  return (
    <div className=" bg-[#12121f] h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
