import { useEffect, useState } from 'react'
import './Addtodo.css'
import { nanoid } from 'nanoid'

export  default function AddTodoToList({props,setId,setList}){
  const[editText,setEditText]=useState("EDIT")
  const [click,setClick]=useState(true)
  const [editedText,setEditedText]=useState('')

  const edit=(id)=>{
    document.getElementById(id).contentEditable = true
  }

  const newText=(id)=>{
    document.getElementById(id).contentEditable = false
    props.map((obj)=>{
      if(obj.id===id)obj.name=editedText;
    })
  }
    return (       
            props.map((value)=>
                <div className="todos"> 
                 <div className="todo" id={value.id} onInput={!click?(e)=>setEditedText((document.getElementById(e.target.id).textContent)):()=>{}}>{value?.name}</div>
                 <button className='delete' id={value.id}
                 onClick={(e)=> setId(e.target.id)}
                 >DELETE</button>
                 <button
                 id={value.id}
                 className='button'
                 onClick={click ? (e)=>{ edit(e.target.id)
                  setEditText("SAVE")
                  setClick(false)
                 
                }:
              (e)=>{ 
                setEditText("EDIT")
                newText(e.target.id)
                setClick(true)
              }}
                 >{editText}</button>
                </div>
            )
        )
}


