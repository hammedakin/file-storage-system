import { Route, Routes } from "react-router-dom"


import './App.css';
import './Components/Auth/Auth.css'
import ForgetPassword from "./Components/Auth/ForgetPassword";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ResetPassword from "./Components/Auth/ResetPassword";
import './Components/Homepage/Homepage.css'
import Pricing from "./Components/Homepage/Pricing";


import PageNotFound from "./PageNotFound";

import Homepage from "./Pages/Homepage"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />



        <Route path="/*" element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
