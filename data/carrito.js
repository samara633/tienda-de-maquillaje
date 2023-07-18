//construccion de del carrito

const pintarCarrito  = () => {
    modalContainer.innerHTML="";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>`;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText= "X";//boton cerrar ventana
    modalbutton.className="modal-header-button";

    modalbutton.addEventListener("click",()=>{
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalbutton);
//campo donde se mostrara el producto seleccionado
    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML=`
        <img src="${product.imagen}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <p> cantidad: ${product.cantidad}</p>
        `;
        modalContainer.append(carritoContent);
        //elemento de borrar un producto
        //se crea el boton
        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto);
    });
    //total a pagar
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML= `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};
verCarrito.addEventListener("click",pintarCarrito);
//funcion que elimina el id
const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id); 
    carrito = carrito.filter((carritoId) => {
      return carritoId.id !== foundId;
    });
    pintarCarrito();
  };
  