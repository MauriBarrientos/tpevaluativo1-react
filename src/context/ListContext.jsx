import React, {createContext, useState, useEffect} from 'react'

export const ListContext = createContext();
export const ListContextProvider= ({children}) => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        const initialList = ['Leche','Pan', 'Huevos'];
        setList(initialList);
    }, []);

    return (
        <ListContext.Provider value = {{list, setList}}>
            {children}
        </ListContext.Provider>
    )
}
