
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import NavHeader from './Components/headNav/headerNav';
import eventDisplay from './Components/Home/event/displayEvent';

function App() {
  return (
    <Router>
      <Nav />
      <NavHeader />
      <eventDisplay />
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
