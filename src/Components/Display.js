import React, { useRef, useState } from "react";
import "../Web/Display.css"
import Empty from "./Empty";
import Items from "./Items";


const Display = ({ afterLoginRef, display }) => {



  return (
     <section ref={afterLoginRef} className="display">
        {display ? <Empty /> : <Items />}
         
         
     </section> 

  )
};

export default Display;
