import React,{useState} from "react"
import Progress from "./Progress"
 const UploadForm = () =>{
const types = ["image/png","image/jpeg"]
const [selected, setSelected] = useState(null);
const [error,setError] = useState(null);
const Handlechange = (e) => {
    let selected = e.target.files[0];
    console.log(selected)
    if(selected && types.includes(selected.type))
    {
        setSelected(selected);
        setError('');
    }
    else{
        setSelected(null);
        setError("Please upload file types of png/jpeg");
    }

}
     return(
         <form>
          <label>
        <input type="file" onChange={Handlechange} />
    
      </label>
         <div>
         {error && <div>{error}</div>}
       
         {selected && <div><Progress
          selected={selected} 
          setSelected={setSelected}
          /></div>}

         </div>
         </form>
     )
 }
 export default UploadForm