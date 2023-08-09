import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Card() {
  return (
    <div className="card-contents">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}
