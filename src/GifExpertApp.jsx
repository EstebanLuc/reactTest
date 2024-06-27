import { useState} from 'react'
import { AddCategory } from './components/AddCategory'
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch','one piece'])

  const onAddCategory = () => {
    
    setCategories(cat => [...cat,"valorant"])
  } 

  

  return (
   <>
   <h1>Gif</h1>   
<AddCategory/>
   <button onClick={ onAddCategory }>Agregar</button>
   <ol>
        {categories.map(category => {
            return <li key={ category }>{category}</li>
        })}
   </ol>
   </>
  )
}
