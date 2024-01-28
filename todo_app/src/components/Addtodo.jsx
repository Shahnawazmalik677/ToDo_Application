import { useState} from "react"
import { nanoid } from 'nanoid';
import AddTodoToList from "./TodoList";
export default function Addtodo(){

     const [text,setText]=useState('');
     const [list,setList]=useState([]); 
     //const [render,setRender]=useState(true);

    const add=()=>{
        
        let arr=list
         arr.push({
            name:text,
            id:nanoid()
        })
         setText("")
         setList(arr)
    }
   const setId=(id)=>{
        
       setList(list.filter((value)=>value.id!==id))
       setText("")
      }
    return(
        <>
         <div className="add">
            <input type="text" className="input"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}  
            />
            <button className="button"  
             onClick={(e)=> add()}
            >Submit</button>
         </div>
         {            
                <AddTodoToList props={list} setId={setId} set={setList}/>   
         }
        </>
    )
}