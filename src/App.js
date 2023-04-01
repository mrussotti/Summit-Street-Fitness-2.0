import InfoDump from "./pages/InfoDump";
import ActionAssist from "./pages/ActionAssist";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer"

function App() { //Only put stuff here if you want it to show up regardless of page on the website
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/InfoDump" element={<InfoDump/>}/>
        <Route path="/ActionAssist" element={<ActionAssist/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>

    </div>
    
    <Footer />
    
    </>
  )
}

export default App;
