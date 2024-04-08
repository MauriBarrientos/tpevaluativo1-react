import React, {useContext} from 'react'
import {ListContext} from '../context/ListContext'
import ListaProductos from './ItemsLista';

function ListaCompras() {
    const {list} = useContext(ListContext);

    return (
        <div>
            <h2>Cosas a comprar</h2>
            <ul>
                {list.map((item, index) => (
                    <ListaProductos key={index} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default ListaCompras;