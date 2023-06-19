import { useState } from "react";

export default function Form ({onAddItems}){
    const [description, setDecription] = useState("");
    const [quantity, setQuantity] = useState(1);
    
    function handleSubmit (e){
     e.preventDefault();
     if(!description) return;
      const newItem = {description, quantity, packed:false, id:Date.now()}
      onAddItems(newItem)
      setDecription("");
      setQuantity(1);
    }
    return <form className="add-form" onSubmit={handleSubmit}>
              <h3>What do you need for your trip 🤔 ? </h3>
              <select value= {quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
                {Array.from({length:20},(_,i)=>i+1).map(ele =>(<option value={ele} key={ele}>{ele}</option>))}
              </select>
              <input type="text" placeholder="text" value= {description} onChange={(e)=>setDecription(e.target.value)}></input>
              <button>Add</button>
    </form>
  }