import Beginner from "./pages/Beginner";
import Intermediate from "./pages/Intermediate";
import Advanced from "./pages/Advanced";
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
        <Route path="/Beginner" element={<Beginner/>}/>
        <Route path="/Intermediate" element={<Intermediate/>}/>
        <Route path="/Advanced" element={<Advanced/>}/>
      </Routes>

    </div>
    </>
  )
}

export default App;
