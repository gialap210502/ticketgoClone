
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
