import { useState } from "react";
import Home from "./Home";
import SideBars from "./SideBars";
import "./App.css";
import Header from "./Header";
import SavedPasswords from "./SavedPasswords";
import PasswordsContextProvider from "./store";

function App() {
  const [selectedTab,setTab]=useState("Home");
  return <PasswordsContextProvider>
  <div className="rkkk">
    <SideBars selectedTab={selectedTab} setSelectedTab={setTab}></SideBars>
    <div className="header-class">
      <Header></Header>
      {selectedTab==="Home" ? <Home></Home> : <SavedPasswords></SavedPasswords>}
    </div>
    </div>
    </PasswordsContextProvider>
}

export default App;
