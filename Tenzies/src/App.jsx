import React from "react";
import Die from "./components/Die/Die.jsx";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="dice">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={5} />
        <Die value={4} />
        <Die value={3} />
        <Die value={2} />
      </div>
    </main>
  );
};

export default App;
