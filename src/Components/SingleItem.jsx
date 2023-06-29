import React, { useRef, useState } from 'react'

const SingleItem = ({item, removeItem, editItems}) => {

    const {id, name, complete} = item


  return (

        <article className=' w-full flex justify-between items-center' key={id}>
            <input type="checkbox"  checked={complete} onChange={() => editItems(id)} />
            <h3 className={complete && 'line-through'} style={{ fontWeight : 'semibold'}}>{name}</h3>
            <button className=' bg-gray-800 text-white py-2 px-3 rounded-md'
            onClick={() => {
                removeItem(id)
            }}
            >Remove Item</button> 
        </article> 
  
  )
}

export default SingleItem