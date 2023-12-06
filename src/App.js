import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TestState from "./context/notes/testState";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <TestState>
        <Navbar />
        <Routes basename='/iNoteBook'>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </TestState>
    </>
  );
};

export default App;
