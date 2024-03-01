import React, { useState } from "react";
import "./App.css";
// import User from "./components/User";
// import Data from "./components/Data";
export default function App() {
  const [pass, setPass] = useState([]);
  function add({ updata }) {
    setPass([...pass, updata]);
  }
  function clearAll(clear) {
    if (clear) {
      setPass([]);
    }
  }
  function DeleteItem(index) {
    let temp = [...pass];
    temp.splice(index, 1);
    setPass(temp);
  }
  return (
    <>
      <div id="parent">
        <h1 id="h1">Wish List Manager</h1>
        <User addtothelist={add} clearAll={clearAll} />
        <Data sendData={pass} DeleteItem={DeleteItem} />
      </div>
    </>
  );
}