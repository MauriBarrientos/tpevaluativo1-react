import React from 'react'
import AddItem from './components/AddItem'
import ItemsLista from './components/ItemsLista'
import ListaCompras from './components/ListaCompras'
import { ListContextProvider } from './context/ListContext'
import './App.css'


function App() {
  return (
    <ListContextProvider>
      <div>
        <h1>Lista de Compras</h1>
        <AddItem />
        <ItemsLista />
        <ListaCompras />
      </div>
    </ListContextProvider>
  )
}

export default App;