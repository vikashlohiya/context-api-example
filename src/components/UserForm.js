import { useState,useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const UserForm=()=>{

    const {usename,setUserName}=useContext(ThemeContext); 
    const changeName=(e)=>{
       // console.log(e.target.value);
       setUserName(e.target.value);
       }
    return (
        <form >
        <div>
          <label>Name:</label>
          <input   type="text"  value={usename}  name="name" onChange={changeName}  />
        </div>    
        <div>Your name is : {usename} </div>
    
      </form>
    );
}

export default UserForm;