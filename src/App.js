import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsiteList from "./features/campsites/CampsiteList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CampsiteList />
      <Footer />
    </div>
  );
}

export default App;
