import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TestState from "./context/notes/noteContext";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useState } from "react";
import AlertCustom from "./components/Alert";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message, strong) => {
    setAlert({
      type: type,
      msg: message,
      strong: strong,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <TestState>
        <Navbar />
        <div className='container my-3'></div>
        <Routes basename='/iNoteBook'>
          <Route
            exact
            path='/'
            element={
              <>
                <AlertCustom alert={alert} />
                <br />
                <br />
                <Home />
              </>
            }
          />
          <Route exact path='/about' element={<About />} />
          <Route
            exact
            path='/signup'
            element={<SignUp alert={alert} showAlert={showAlert} />}
          />
          <Route
            exact
            path='/login'
            element={<Login alert={alert} showAlert={showAlert} />}
          />
        </Routes>
      </TestState>
    </>
  );
};

export default App;
