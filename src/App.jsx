import "./App.css";
import { useState, useEffect } from "react";
import spiralElementBottom from "../public/assets/images/pattern-squiggly-line-bottom.svg";
import spiralElementTop from "../public/assets/images/pattern-squiggly-line-top.svg";
import Form from "./components/Form";
import Ticket from "./components/Ticket";

function App() {
  const [currentState, setCurrentState] = useState("");

  const handleDataFromChild = (data) => {
    setCurrentState(data);
  };

  return (
    <main className="main-bg">
      {currentState ? (
        <Ticket />
      ) : (
        <Form sendDataToMainPage={handleDataFromChild} />
      )}
    </main>
  );
}

export default App;
