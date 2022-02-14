import React, { useRef, useState } from "react";
import Empty from "./Empty";
import Items from "./Items";


const Display = ({ afterLoginRef, display, token }) => {



  return (
     <section ref={afterLoginRef} className="display">
        {display ? <Empty /> : <Items token={token}/>}
         
         
     </section> 

  )
};

export default Display;
