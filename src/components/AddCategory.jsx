import { useState } from "react"

export const AddCategory = () => {
  
    const [inputValue, setInputValue] = useState('one Punch')
    const onInputChange = ({target}) => {
        
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
    }

    return (
        <form onSubmit={(event) =>onSubmit(event)}>
            <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={onInputChange}
    />

        </form>
    
  )
}
