import React, { useRef, useState } from "react";
import "../Web/Display.css"
import Empty from "./Empty";


const Display = ({ afterLoginRef }) => {
const [display, setDisplay] = useState(false)


  return (
     <section ref={afterLoginRef} className="display">
         <Empty />
     </section> 

  )
};

export default Display;
