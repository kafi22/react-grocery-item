import React from 'react'
import SingleItem from './SingleItem'

const Items = ({newItems, removeItem, editItems}) => {

    console.log(newItems)

    const catchItems = newItems.map(item => (
        
        <SingleItem  key={item.id} item={item} removeItem={removeItem} editItems={editItems} />
    ))
  return (
    <div className=' grid grid-cols-1 w-full justify-between gap-2 py-6'>
        {catchItems}

        <footer>
            <h3 className=' text-center'>{newItems.length} Items</h3>
        </footer>
    </div>
  )
}

export default Items