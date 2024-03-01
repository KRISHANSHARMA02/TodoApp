"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
   e.preventDefault()
   setmainTask([...mainTask,{title,desc}]);
   settitle("")
   setdesc("")
   console.log(mainTask)

  }
const deleteHandler = (i)=>{
  let copytask = [...mainTask] 
  copytask.splice(i,1)
  setmainTask(copytask)

}

  let renderTask = <h2>no task available</h2>;
 
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <>
       
        
          <div key={i} className='flex justify-between m-3'>
             
            <h2 className='text-xl font-semibold'>{t.title}
            </h2>
            
            <h3 className='text-lg '>{t.desc}
            </h3>
            <button onClick={()=>{
              deleteHandler(i)
            }}
              className='bg-red-600 text-white rounded p-2 hover:bg-red-400'>Remove Task</button>
          </div>
          
          </>
      )
     
  
    });


  }
 
  
  return (
    <>
      <h1 className='bg-black text-white text-center py-5 font-bold text-5xl'>My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input className='text-2xl border-zinc-800 border-4 m-8 py2 px-4 active:border-zinc-400' type='text' placeholder='Enter title here' value={title}
        onChange={(e)=>{
          settitle(e.target.value)

        }}></input>
        <input className='text-2xl border-zinc-800 border-4 m-8 py2 px-4 active:border-zinc-400' type='text' placeholder='Enter description here'
         value={desc}
         onChange={(e)=>{
          setdesc(e.target.value)
         }} ></input>
       <button className='bg-black text-white text-2xl font-bold p-2 rounded-md hover:bg-gray-600'>Add Task</button>
      </form>
      <hr/>
      <div className='bg-gray-400 p-8'>
        <ul>
             {renderTask}
        </ul>

      </div>
    </>

    
  )
}

export default page