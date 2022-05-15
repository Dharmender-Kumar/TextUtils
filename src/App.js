import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// react router

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042734";
      document.body.style.textDecorationColor = "white";
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.textDecorationColor = "black";
      showAlert("light mode Enabled", "primary");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to ananlyze Below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
