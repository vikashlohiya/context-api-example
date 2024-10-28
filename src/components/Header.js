import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const  Header=(pro)=>{
   
      const {usename,setUserName}=useContext(ThemeContext);
   
    return   <header className="header">
    <h1>My Website</h1>
    <nav>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="user-info">
       <p>Welcome,{usename}!   </p>
     <input type="button" onClick={()=>{setUserName('')}}  value="Remove Name"  />
      </div>
    </nav>
    
  </header>
}

export { Header };


export const MYVAR=100;