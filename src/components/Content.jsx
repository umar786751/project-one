import React, { useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
const Content = () => {
const [items, setItems] = useState([
    {
        id: 1, 
        checked: false,
        item: 'one half pound bag of coca covered'
    },
    {
        id: 2, 
        checked: false,
        item: 'Oil olive'
    },
    {
        id: 3, 
        checked: true,
        item: 'almonds'
    },
])
const handleCheck = (id) => {
    const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked } : item)
    setItems(listItems)
}

  return (
    <>
    <main>
        <ul>
            {
                items.map((item)=>(
                    <li key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange={()=> handleCheck(item.id)}/>
                        <label htmlFor="">{item.item}</label>
                        <FaTrashAlt role='button' tabIndex="0"/>
                    </li>
                ))
            }
        </ul>
    </main>
    </>
  )
}

export default Content