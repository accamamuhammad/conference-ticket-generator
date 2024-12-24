import "./App.css";
import spiralElementBottom from "../public/assets/images/pattern-squiggly-line-bottom.svg";
import spiralElementTop from "../public/assets/images/pattern-squiggly-line-top.svg";
import Form from "./components/Form";

function App() {
  return (
    <main className="main-bg">
      {/* Background elements */}
      {/* <img
        src={spiralElementBottom}
        alt="spiralElementBottom"
        className="spiral-element-bottom"
      />
      <img
        src={spiralElementTop}
        alt="spiralElementTop"
        className="spiral-element-top"
      /> */}
      {/* Main element */}
      <Form />
    </main>
  );
}

export default App;
