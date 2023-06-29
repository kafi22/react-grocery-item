import React, { useRef, useState } from 'react'

const Forms = ({getNewItems, refContent}) => {
   const [text, setText] = useState('')
  
 

   const handelForm = (e) => {
    e.preventDefault();
    if(!text) return;
    getNewItems(text)
    setText('')
    refContent.current.focus()
   }

  return (
    <div className='flex flex-col justify-center items-center space-y-2'>
        <h1 className=' text-2xl tracking-wider font-medium mb-6 text-slate-700'>Grocery List</h1>

        <form action="" onSubmit={handelForm} className=' flex gap-2 w-full justify-between items-center'>
            <input type="text" 
            value={text}
            name='text'
            id=''
            onChange={e => setText(e.target.value)}
            className=' py-2 px-3 bg-slate-100 text-base rounded-md w-[280px]'
            ref={refContent}
            />
            <button type='submit' className=' bg-cyan-400 py-2 px-8 rounded-md shadow-md text-center text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Forms