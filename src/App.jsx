import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CurrentCouncil from "./pages/CurrentCouncil";
import Events from "./pages/Events";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/ContactPage";
import JoinPage from "./pages/JoinPage";
import ScrollToTop from "./ScrollToTop";
import PrevCouncil1 from './pages/PrevCouncil1';
import Developers from './pages/Developers';
import WIE from './pages/WIE/WIE';
import CI from './pages/CI/CI';
import Darkb from './components/Darkb/Darkb';
import Societies3 from './components/Societies-3/Societies';
import Calendar from './components/Calendar/Calendar.jsx';
import MyLoftGuide from './pages/MyLoft/MyLoftGuide.jsx'

// Workshops
import VesitTank from "./pages/workshops/VesitTank";
import APIcalypse from './pages/workshops/Apicalypse.jsx';
import CryptoChrome from './pages/workshops/Crypto.jsx';
import Flutter from './pages/workshops/Flutter.jsx';
import HpOmen from './pages/workshops/HPOmen.jsx';
import MachineMinds from './pages/workshops/MachineMinds.jsx';
import NexIoT from './pages/workshops/NexIoT.jsx';
import PaperQuest from './pages/workshops/Paperquest.jsx';
import UIUX from './pages/workshops/UIUX.jsx';
import WealthWars from './pages/workshops/WealthWars.jsx';
import Melange from './pages/workshops/Sympo.jsx';
import UIUXCompetition from './pages/workshops/UIUX_Comp.jsx';
import FinancialLiteracy from './pages/workshops/Finance.jsx';
import PreviousCouncil from './pages/PreviousCouncil/PreviousCouncil.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current_council" element={<CurrentCouncil />} />
        <Route path="/council23-24" element={<PrevCouncil1 />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join_ieee" element={<JoinPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/societies/wie" element={<WIE />} />
        {/* <Route path="/societies/ci" element={<CI />} /> */}
        <Route path="/myloft" element={<MyLoftGuide />} />
        <Route path="/previousCouncil" element={<PreviousCouncil />} />

        {/* Workshop Routes */}
        <Route path="/vesit_tank" element={<VesitTank />} />
        <Route path="/apicalypse" element={<APIcalypse />} />
        <Route path="/crypto_chrome" element={<CryptoChrome />} />
        <Route path="/flutter" element={<Flutter />} />
        <Route path="/hpomen" element={<HpOmen />} />
        <Route path="/machine_minds" element={<MachineMinds />} />
        <Route path="/nexiot" element={<NexIoT />} />
        <Route path="/paperquest" element={<PaperQuest />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/wealth_wars" element={<WealthWars />} />
        <Route path="/melange" element={<Melange />} />
        <Route path="/uiux_competition" element={<UIUXCompetition />} />
        <Route path="/financial_literacy" element={<FinancialLiteracy />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
