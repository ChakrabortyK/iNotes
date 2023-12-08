// eslint-disable-next-line
import React from "react";
import Notes from "./Notes";
import Addnote from "./Addnote";



export const Home = () => {
  return <div className="container">
    <Addnote />
    <Notes />
  </div>
};
export default Home;
