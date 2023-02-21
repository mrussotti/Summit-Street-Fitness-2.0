import Beginner from "./pages/Beginner";
import Intermediate from "./pages/Intermediate";
import Advanced from "./pages/Advanced";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer"

function App() { //Only put stuff here if you want it to show up regardless of page on the website
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Beginner" element={<Beginner/>}/>
        <Route path="/Intermediate" element={<Intermediate/>}/>
        <Route path="/Advanced" element={<Advanced/>}/>
      </Routes>

    </div>
    
    <Footer />
    
    </>
  )
}

export default App;
