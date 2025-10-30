// RESPONSE: RESPUESTAS FORMATO JSON
// DATOS: ARCHIVO
// fetch: API para consumir datos de JSON
// ``: texto (template literals)

const contenedor = document.getElementById("contenedor-productos");

fetch("productos.json")
  .then(response => response.json())
  .then(datos => {

    datos.forEach(producto => { // recorremos los objetos del JSON
      const div = document.createElement("div"); // crear tarjeta
      div.classList.add("producto");
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.descripcion}</h3>
        <p>Precio: $${producto.precio}</p>
      `;

      contenedor.appendChild(div); // agregar la tarjeta al contenedor
      
const btnEliminar1 = document.createElement("button");
 const img3= document.createElement("img");
  img3.src="https://i.pinimg.com/736x/70/4e/e2/704ee29db9689a6823fe702029c901c7.jpg"
  img3.className= "img3"
  btnEliminar1.appendChild(img3);
  div.appendChild(btnEliminar1);
//btnEliminar.textContent = "Eliminar";
btnEliminar1.addEventListener("click", () => div.remove());
    });

  })
  .catch(error => console.log("Error al cargar el JSON:", error)); // manejo de errores


document.getElementById("agregar").addEventListener("click", () => {
  const url = document.getElementById("url").value;
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const descripcio = document.getElementById("descripcio").value;

  const caja= document.createElement("div");
  caja.className= "caja";

  const img= document.createElement("img");
  img.src=url;
  caja.appendChild(img);

   const nombr= document.createElement("h3");
  nombr.textContent= nombre;
  caja.appendChild(nombr);

  const pdescri= document.createElement("p");
  pdescri.textContent= descripcio;
  caja.appendChild(pdescri);

  const pPrecio= document.createElement("p")
  pPrecio.textContent= precio;
  caja.appendChild(pPrecio);

  document.getElementById("contenedor-productos").appendChild(caja);
  console.log(caja)

  //limpiar
document.getElementById("url").value= "";
document.getElementById("nombre").value= "";
document.getElementById("precio").value= "";
document.getElementById("descripcio").value= "";

const btnEliminar = document.createElement("button");
 const img2= document.createElement("img");
  img2.src="https://i.pinimg.com/736x/70/4e/e2/704ee29db9689a6823fe702029c901c7.jpg"
  img2.className= "img2"
  btnEliminar.appendChild(img2);
  caja.appendChild(btnEliminar);
//btnEliminar.textContent = "Eliminar";
btnEliminar.addEventListener("click", () => caja.remove());
})









