import React, {useState, useContext} from 'react'
import {ListContext} from '../context/ListContext'

function AddItem() {
    const [newItem, setNewItem] = useState('');
    const {list, setList} = useContext(ListContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        setList([...list, newItem]);
        setNewItem('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
                placeholder= "Añade un producto" />
            <button type="submit">Añadir</button>
        </form>
    )
}

export default AddItem;