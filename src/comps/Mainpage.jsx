import React from "react";
import Navbar from "./Navbar";
import MainHeader from "./MainHeader";
import { Content } from "./Content";
import { Keenslider } from "./Content";
import { Header } from "semantic-ui-react";

function Mainpage() {
  return (
    <div className="App">
      <Navbar />
      <MainHeader />
      <Content />
      <Keenslider />
      <div className="musicsource">
        <h3>Music :</h3>
        <a href="https://www.youtube.com/watch?v=3HjG1Y4QpVA">
          LAKEY INSPIRED - Chill Day
        </a>
      </div>
    </div>
  );
}

export default Mainpage;
