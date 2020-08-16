import React from "react";
import "./App.css";
import Navibar from "./component/navbar/navbar";
import CarouselHome from "./component/banner-box/carousel-home"
import 'bootstrap/dist/css/bootstrap.min.css';
import GameBox from "./component/game-box/game-box"
import ModeTab from "./component/mode-tabs/mode-tab"
import SearchBox from "./component/search-box/search-box"

function App() {
  return (
    <div>
      <Navibar />
      <CarouselHome />
      <SearchBox />
      <ModeTab />
      <GameBox />
    </div>
  );
}

export default App;
