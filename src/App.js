import React from 'react';
import './App.css';
import "bulma/css/bulma.css";
import TopLogo from "./components/Toplogo";
import RoyalSlider from "./components/Royalslider";
import MainNav from "./components/MainNav";
import SearchImg from "./components/Searchimg";
import MainContent from "./components/MainContent";
import "./components/stylesheet/main-content.css"
// import FeatureBottom from "./components/FeatureBottom";
import PageBottom from "./components/PageBottom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="space">
        <TopLogo />
        <RoyalSlider />
        <MainNav />
        <SearchImg />
        <MainContent />
        <PageBottom />
        <Footer />
      </div>
    </div>
  );
}

export default App;
