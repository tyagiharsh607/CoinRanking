import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CoinContextProvider } from "./Context/CoinContext";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import FullCoinDetailPage from "./Pages/FullCoinDetailPage";

function App() {
  return (
    <>
      <CoinContextProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/coin/:uuid" element={<FullCoinDetailPage />} />
          </Routes>
        </Router>
      </CoinContextProvider>
    </>
  );
}

export default App;
