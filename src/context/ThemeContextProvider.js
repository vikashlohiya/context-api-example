import React, { useState } from "react";

import ThemeContext from "./ThemeContext";

const ThemeContextProvider=({children})=>{
    const [usename,setUserName]=useState(''); 
     const showMessag=()=>{
        console.log("Hello");
    }
    return(

     <ThemeContext.Provider value={{usename,setUserName}}>
     {children}
     </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
