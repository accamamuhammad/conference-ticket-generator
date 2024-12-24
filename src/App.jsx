import "./App.css";
import spiralElementBottom from "../public/assets/images/pattern-squiggly-line-bottom.svg";
import spiralElementTop from "../public/assets/images/pattern-squiggly-line-top.svg";
import Form from "./components/Form";
import Ticket from "./components/Ticket";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <main className="main-bg">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
