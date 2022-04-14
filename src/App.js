import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./stateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app-header">
            <Header />
          </div>
          <div className="app__body">
            <Sidebar />

            <Feed />

            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
