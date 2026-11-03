import { useState,useEffect } from "react"; 
import About from "./About";
  

function Regfrm({ sendNameToParent }) {
    const name = "About";
    
    useEffect(() => {
       sendNameToParent(name);
  }, []);

    
  return (
    <div>{name}</div>
    
  );
}
export default Regfrm;