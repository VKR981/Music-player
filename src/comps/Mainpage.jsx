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
    </div>
  );
}

export default Mainpage;
