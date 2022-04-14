import React from "react";
import Header from "../src/Header";
import Card from "../src/Card";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="board">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
