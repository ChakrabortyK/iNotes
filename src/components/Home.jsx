// eslint-disable-next-line
import React from "react";
import Notes from "./Notes";
import Addnote from "./Addnote";



export const Home = (props) => {
  return <div className="container">
    <Addnote showAlert={props.showAlert} />
    <Notes showAlert={props.showAlert} />
  </div>
};
export default Home;
