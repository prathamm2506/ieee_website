import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CurrentCouncil from "./pages/CurrentCouncil";
import Events from "./pages/Events";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/ContactPage";
import JoinPage from "./pages/JoinPage";
import { VesitTank } from "./pages/workshops/VesitTank";
import ScrollToTop from "./ScrollToTop";
import Societies from "./components/Societies-3/Societies";


function App() {
  return (
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current_council" element={<CurrentCouncil />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join_ieee" element={<JoinPage />} />
        <Route path="/vesit_tank" element={<VesitTank />} />
      </Routes>
      <Footer/>
      {/* <Societies/> */}
    </Router>
  );
}

export default App;
