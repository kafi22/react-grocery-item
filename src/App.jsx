import { useRef, useState } from "react"
import Forms from "./Components/Forms"
import Items from "./Components/Items"

   const setLocalStorage = (newItems) => {
    localStorage.setItem('list', JSON.stringify(newItems))
   }

   const getLocalStorage = () => {

    const getItems = localStorage.getItem('list')
    const okGet = getItems ? JSON.parse(localStorage.getItem('list')) : []
    return okGet;
   }

const App = () => {

  const [newItems, setNewItems] = useState(getLocalStorage())
   const refContent = useRef()

 


  const getNewItems = (items) => {
    const theNewOne = {
      name : items,
      complete : false,
      id : Date.now()
    }
    const newOnes = ([...newItems, theNewOne])
    setNewItems(newOnes)
    setLocalStorage(newOnes)

  }

  const removeItem = (id) => {
    const filterItems = newItems.filter(item => item.id !== id)
    setNewItems(filterItems)
    setLocalStorage(filterItems)
    refContent.current.focus()
   
  }

  const editItems = (id) => {
    const edits = newItems.map(item => {
      if(item.id === id) {
        const newEditItems = {...item, complete:!item.complete}
        return newEditItems;
      } 
      return item
    })
    setNewItems(edits)
    setLocalStorage(edits)
  }

  return (
    <div className=" grid place-content-center min-h-screen ">
      <div className="w-[430px] rounded-md shadow-md p-4 flex flex-col justify-center items-center space-y-3">
      <Forms getNewItems={getNewItems} refContent={refContent} />
      <Items newItems={newItems} removeItem={removeItem} editItems={editItems} />
      </div>
    </div>
  )
}

export default App