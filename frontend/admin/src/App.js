import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import EditPortofolio from "./components/portofolio/EditPortofolio";
import AddPortofolio from "./components/portofolio/AddPortofolio";
import EditCctv from "./components/cctv/EditCctv";
import AddCctv from "./components/cctv/AddCctv";
import AddIt from "./components/itsupport/addIt";
import EditIt from "./components/itsupport/editIt";
import AddPanel from "./components/panel/addPanel";
import EditPanel from "./components/panel/editPanel";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={[<Navbar/> ,<Dashboard/>]}/>
        <Route path="editportofolio/:id" element={[<Navbar/> ,<EditPortofolio/>]}/>
        <Route path="addportofolio" element={[<Navbar/> ,<AddPortofolio/>]}/>
        <Route path="editcctv/:id" element={[<Navbar/> ,<EditCctv/>]}/>
        <Route path="addcctv" element={[<Navbar/> ,<AddCctv/>]}/>
        <Route path="edititsupport/:id" element={[<Navbar/> ,<EditIt/>]}/>
        <Route path="additsupport" element={[<Navbar/> ,<AddIt/>]}/>
        <Route path="editsolarhomesystem/:id" element={[<Navbar/> ,<EditPanel/>]}/>
        <Route path="addsolarhomesystem" element={[<Navbar/> ,<AddPanel/>]}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
