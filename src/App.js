
import {Header,MYVAR} from "./components/Header";
import Counter from "./components/Counter";
import './components/Header.css'; // Import a CSS file for styling if needed
import { useContext, useState } from "react";
import UserForm from "./components/UserForm";

import ThemeContextProvider from "./context/ThemeContextProvider";
import ThemeContext from "./context/ThemeContext";

function App() {  
      
                             
  return (
    <ThemeContextProvider>
    <div className="App">
       <Header fname="Vikash" lname="Lohiya"  /> 
       <div className="form-container">
    <UserForm/>
   
    </div>
    </div>
    </ThemeContextProvider>
  );
}

export default App;
