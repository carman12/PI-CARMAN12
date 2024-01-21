import { useState } from "react";

export default function SearchBar({onSearch}) {


   const [id,setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)

   }
 //const [inputValue, setInputValue] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    setId('');
  }
  
   return (
      <div>
             <form onSubmit={handleSubmit}>
            <input type='search' value={id} onChange={handleChange}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
         </form>
      </div>
   );
}
