import React,{useState} from 'react';


const  Counter=()=>{
    const [fn, setFN] = useState(0);
    const [sn, setSN] = useState(0);
    const [addn, setAdd] = useState(0);
    console.log("Rerender");
    function add(){
        setAdd(Number(fn)+Number(sn));
    }

    function getFn(e){
        console.log("f");
        setFN(e.target.value);
    }

    function getSn(e){
        console.log("s");
        setSN(e.target.value)
    }
    return (
      <div>
       <label>First  No</label> <input type='text' name='fn' onChange={ getFn} /><br/>
       <label>Second No</label><input type='text' name='sn'  onChange={getSn} />
        <p>Add is : {addn}</p>
        <button onClick={add}>Add</button>
      </div>
    );
}

export default Counter;