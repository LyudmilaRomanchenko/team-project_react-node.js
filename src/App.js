import logo from "./logo.svg";
import "./App.css";
// import ButtonAddTransaction from "./components/ButtonAddTransaction";
import FormDialog from "./components/FormDialog";
// import GreenCircle from "./components/GreenCircle";

import ModalAddTransaction from "./components/ModalAddTransaction";
import Modal from "./components/Modal";

import { useState } from "react";

function App() {
  // const [modalActive, setModalActive] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <GreenCircle /> */}
        {/* <ButtonAddTransaction></ButtonAddTransaction> */}
        {/* <FormDialog /> */}
        <ModalAddTransaction />
        {/* <Modal active={modalActive} setActive={setModalActive} /> */}
      </header>
    </div>
  );
}

export default App;
