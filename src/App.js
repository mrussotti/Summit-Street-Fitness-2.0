import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>

    </div>
    </>
  )
}

export default App;
