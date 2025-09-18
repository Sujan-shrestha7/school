import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/header" element={<Header/>}></Route>
          <Route path="/footer" element={<Footer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
