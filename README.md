# TP EVALUTATIVO N°1

En esta aplicación se realizó un anotador de productos para ir de compras. Una lista de compras sencilla.

Se utilizaron los siguientes hooks: useState, useEffect y useContext, de la siguiente manera:


1-useState:
    Se utilizó para agregar agregar y modificar el estado de la lista de compras (si cuando tiene o no un producto nuevo, con la funcion setList)

2-useEffect:
    Sirve para cargar la lista inicial de compras desde el array predefinido. Se ejecuta una vez después del montado del DOM por eso el array vacío ("[]").

3-useContext:
    Se utiliza para acceder al contexto que proporciona el estado a lo largo de la app. Aquí sirve para acceder al contexto que engloba la lista de compras y hacerlo disponible para cuando se lo necesite. ("{list"})