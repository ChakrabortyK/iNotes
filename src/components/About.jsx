import { React, useContext, useEffect } from "react";
import initContext from "../context/notes/initContext"

const About = () => {
  const a = useContext(initContext);
  useEffect(() => {
    a.update()

  }, [])

  // console.log(a)
  return <div>{a.first.key} About {a.first.value}</div>;
};

export default About;
