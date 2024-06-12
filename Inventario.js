let inventario = {
    productos: []
};

function agregarProducto(nombre, precio, cantidad){
    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
    };
    inventario.productos.push(producto);
}

function listarProductos(){
    inventario.productos.forEach(producto => {
        console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
    });
}

function totalInventario(){
    let total = 0;
    inventario.productos.forEach(producto => {
        total += (producto.precio * producto.cantidad);
    });
    return total;
}
agregarProducto('Azucar', 3.250, 1)
agregarProducto('Sandia', 4.000, 1)
agregarProducto('Cafe', 2.550, 1)

console.log("Lista de productos:");
listarProductos();

console.log("Valor total del inventario:");
console.log(totalInventario());