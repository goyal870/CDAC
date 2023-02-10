import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/landingpage/homepage";
import Login from "./Components/landingpage/login";
import Signup from "./Components/landingpage/signup";
import Navbar from './Components/Navbar/Navbar'


function App() {
  return (
    <>
    
    <Router>
    <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signup" element={<Navbar/>}/>
      </Routes>
    </Router>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
