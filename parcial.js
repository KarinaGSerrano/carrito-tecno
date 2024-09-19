"use strict";

/*
 *  APELLIDOS
 */

// *****************************************************
// ****************** ARRAY PRODUCTOS ******************
// *****************************************************

let productos = [
  {
    id: 1,
    nombre: "Auriculares Sennheiser HD 280 PRO Black",
    descripcion:
      "Estos audífonos resistentes y cómodos están diseñados para usos de monitoreo profesional. Sus características incluyen un cable en espiral de un solo lado, copas para las orejas giratorias, y una atenuación de ruido de hasta 32 dB.",
    precio: 17800,
    imagen: "producto-1.png",
    imagenes: ["producto-1.png", "producto-1-1.png", "producto-1-2.png"],
    alt: "Auriculares sennheiser",
    categoria: "Auriculares",
  },
  {
    id: 2,
    nombre: "Auriculares AKG K240 Studio Acoustics",
    descripcion:
      "los auriculares AKG 240 están meticulosamente construidos para ofrecer el sonido más preciso que exigen los profesionales. Con tecnología semiabierta para graves solidos y agudos definidos también cuentan con un conector mini XLR y un cable de 3 metros.",
    precio: 15680,
    imagen: "producto-2.png",
    imagenes: ["producto-2.png", "producto-2-1.png", "producto-2-2.png"],
    alt: "Auriculares AKG",
    categoria: "Auriculares",
    promo: "banner-producto-2.png",
  },
  {
    id: 3,
    nombre: "Auriculares Edifier 670bt bluetooth inalámbrico",
    descripcion:
      "El 670bt tiene tecnología de chip que le proporciona un posicionamiento de sonido preciso, brindándole una experiencia de juego inmersiva. Tiene un micrófono antirruido de alta sensibilidad y un diseño de varilla blanda, que se puede ajustar hasta 360 grados.",
    precio: 6300,
    imagen: "producto-3.png",
    imagenes: ["producto-3.png", "producto-3-1.png", "producto-3-2.png"],
    alt: "Auriculares Edifier",
    categoria: "Auriculares",
  },
  {
    id: 4,
    nombre: "Micrófono Shure SM7B dinámico cardioide Black",
    descripcion:
      "Ya sea que se trate de podcasts o grabaciones de estudio, este potente micrófono dinámico ofrece voces suaves y cálidas. El SM7B captura y mejora los detalles más finos de la voz mientras bloquea todas las distracciones. Un icono del audio.",
    precio: 98120,
    imagen: "producto-4.png",
    imagenes: ["producto-4.png", "producto-4-1.png", "producto-4-2.png"],
    alt: "Micrófono Shure",
    categoria: "Micrófonos",
    promo: "banner-producto-4.png",
  },
  {
    id: 5,
    nombre: "Micrófono RODE NT1-A Studio Condenser",
    descripcion:
      "El NT1-A, micrófono de condensador, estándar en la industria. Con calidez y claridad, rango dinámico ampliado, capacidad de alto nivel de presión sonora y frecuencias de bajos, Logra una verdadera herramienta de trabajo en el estudio",
    precio: 86868,
    imagen: "producto-5.png",
    imagenes: ["producto-5.png", "producto-5-1.png", "producto-5-2.png"],
    alt: "Micrófono RODE",
    categoria: "Micrófonos",
  },
  {
    id: 6,
    nombre: "Interfaz de Audio Focusrite Scarlett 3ra Generación",
    descripcion:
      "Crea voces con calidad de estudio, guitarras poderosas y teclas exquisitas. Con el icónico hardware de estudio Focusrite se puede Mezclar y masterizar. Diseñado para brindar todos los complementos para producir música con calidad de estudio",
    precio: 32400,
    imagen: "producto-6.png",
    imagenes: ["producto-6.png", "producto-6-1.png", "producto-6-2.png"],
    alt: "Interfaz de audio Focusrite",
    categoria: "Interfaces de Audio",
  },
];

// *****************************************************
// *************** OBJETOS PARA EL FORM ****************
// *****************************************************
// Paises y provincias:
let paisesProvincias = {
  Argentina: [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
  ],
  Chile: [
    "Arica",
    "Parinacota",
    "Iquique",
    "El Tamarugal",
    "Antofagasta",
    "El Loa",
    "Tocopilla",
    "Chañaral",
    "Copiapó",
    "Huasco",
    "Choapa",
    "Elqui",
    "Limarí",
    "Isla de Pascua",
    "Los Andes",
    "Petorca",
    "Quillota",
    "San Antonio",
    "San Felipe de Aconcagua",
    "Valparaiso",
    "Chacabuco",
    "Cordillera",
    "Maipo",
    "Melipilla",
    "Santiago",
    "Talagante",
    "Cachapoal",
    "Cardenal Caro",
    "Colchagua",
    "Cauquenes",
    "Curicó",
    "Linares",
    "Talca",
    "Arauco",
    "Bio Bío",
    "Concepción",
    "Ñuble",
    "Cautín",
    "Malleco",
    "Valdivia",
    "Ranco",
    "Chiloé",
    "Llanquihue",
    "Osorno",
    "Palena",
    "Aisén",
    "Capitán Prat",
    "Coihaique",
    "General Carrera",
    "Antártica Chilena",
    "Magallanes",
    "Tierra del Fuego",
    "Última Esperanza",
  ],
  Uruguay: [
    "Artigas",
    "Canelones",
    "Cerro Largo",
    "Colonia",
    "Durazno",
    "Flores",
    "Florida",
    "Lavalleja",
    "Maldonado",
    "Montevideo",
    "Paysandú",
    "Río Negro",
    "Rivera",
    "Rocha",
    "Salto",
    "San José",
    "Soriano",
    "Tacuarembó",
    "Treinta y Tres",
  ],
};

// Tipo de tarjetas:
let tarjetasTipo = [
  "American Express",
  "Banelco",
  "Cabal",
  "Master Card",
  "Visa",
];

// Características telefónicas de los paises:
let prefijoTelefonos = ["+54", "+56", "+598"];

//
// *********************************************
// ************* VARIABLES GLOBALES*************
// *********************************************
const d = document;
// CONTADOR Y ACUMULADOR DE ITEMS
let contItemsCarrito = 0;
let sumTotalCarrito = 0;

// PARA EL CARRUSEL DEL MODAL DE LOS PRODUCTOS (3 IMG MINIATURA)
const posInicialImg = 0;
const posFinalImg = 2;
let posActualImg = 0;

//
// *********************************************
// *************** LOCAL STORAGE ***************
// *********************************************

contItemsCarrito = Number(localStorage.getItem("cantidad"));
sumTotalCarrito = Number(localStorage.getItem("sumaTotal"));

productos.filter((producto) => {
  if (Number(localStorage.getItem(producto.id))) {
    producto.cantidad = Number(localStorage.getItem(producto.id));
  }
});

//
// *******************************************
// *********ELEMENTOS DOM GENERALES***********
// *******************************************

const divIdMiniCarrito = d.getElementById("minicarrito");
const divIdProductos = d.getElementById("productos");

const spanItemsMinicarrito = divIdMiniCarrito.querySelector(
  "p:nth-child(1) > span"
);

const spanTotalMinicarrito = divIdMiniCarrito.querySelector(
  "p:nth-child(2) > span"
);

// SE ACTUALIZAN LOS VALORES EN LOCAL STORAGE
spanItemsMinicarrito.replaceChildren(d.createTextNode(contItemsCarrito));
spanTotalMinicarrito.replaceChildren(d.createTextNode(sumTotalCarrito));
// *******************************************

const pMinicarritoCategorias = divIdMiniCarrito.querySelector("p:nth-child(3)");
const buttonVerCarrito = divIdMiniCarrito.querySelector("button");

const pItemMinicarrito = divIdMiniCarrito.querySelector("p:nth-child(1)");
const pTotalMinicarrito = divIdMiniCarrito.querySelector("p:nth-child(2)");

//
// SE MUESTRAN LOS PRODUCTOS EN EL SITIO WEB
// -----------------------------------------------------------------------------
mostrarProducto();

//
// ADD EVENT LISTENER (VER CARRITO)
// -----------------------------------------------------------------------------
pItemMinicarrito.addEventListener("click", verCarrito);
pTotalMinicarrito.addEventListener("click", verCarrito);
buttonVerCarrito.addEventListener("click", verCarrito);
//
// SE MUESTRAN DINAMICAMENTE LAS CATEGORIAS
// -----------------------------------------------------------------------------
const aCategorias = armarACategorias();
pMinicarritoCategorias.append(...aCategorias);

//-----------------------------------------------
// ARMA CATEGORIA TODOS LOS PRODUCTOS
// ----------------------------------------------

const aCategoriaProductos = d.createElement("a");
const aCategoriaProductosTexto = d.createTextNode("Productos");
aCategoriaProductos.setAttribute("href", "#");

aCategoriaProductos.append(aCategoriaProductosTexto);
pMinicarritoCategorias.prepend(aCategoriaProductos);
aCategoriaProductos.addEventListener("click", () => {
  mostrarProducto();
});

//-----------------------------------------------
// ADD EVENT LISTENERS DE TECLAS
// ----------------------------------------------

let modalACerrar = null;

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalACerrar ? modalACerrar.remove() : null;
  }
});

// ----------------------------------------------

let funcionArrow = undefined;

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      funcionArrow ? funcionArrow("ant") : undefined;
      break;
    case "ArrowRight":
      funcionArrow ? funcionArrow("sig") : undefined;
      break;
  }
});

//
// *************************************************************
// ************************ FUNCIONES **************************
// *************************************************************

//-----------------------------------------------
// MOSTRAR PRODUCTO
// ----------------------------------------------
function mostrarProducto() {
  const divProductos = [];
  for (let producto of productos) {
    const divProductoItem = armarDivProducto(producto);
    divProductos.push(divProductoItem);
  }
  divIdProductos.replaceChildren(...divProductos);
}

//-----------------------------------------------
// ARMA ADDEVENTLISTENER PARA CERRAR MODALES
// ----------------------------------------------
function armarListenerCerrarModal(botonCerrar, divEliminar) {
  botonCerrar.addEventListener("click", () => {
    divEliminar.remove();
  });
  // se reasigna el modal que tiene que cerrarse
  modalACerrar = divEliminar;
}
//------------------

//-----------------------------------------------
// ARMA ELEMENTO HTML DEL PRODUCTO
// ----------------------------------------------
function armarDivProducto(producto) {
  // crea los elementos HTML
  const divProducto = d.createElement("div");
  const divImgProducto = d.createElement("div");
  const imgProducto = d.createElement("img");
  const divProductoDetalle = d.createElement("div");
  const h3Producto = d.createElement("h3");
  const pPrecio = d.createElement("p");
  const pCategoria = d.createElement("p");
  const buttonAgregar = d.createElement("button");
  // se agregan atributos
  divProducto.setAttribute("class", "caja-producto");
  divImgProducto.setAttribute("class", "bg-img-producto");
  imgProducto.setAttribute("src", `img/${producto.imagen}`);
  imgProducto.setAttribute("alt", producto.alt);
  // se crean los textos para los elementos html
  const h3Texto = d.createTextNode(producto.nombre);
  const pPrecioTexto = d.createTextNode(`$ ${producto.precio}`);
  const pCategoriaTexto = d.createTextNode(producto.categoria);
  const buttonAgregarTexto = d.createTextNode("Agregar al Carrito");

  // se insertan los textos a los elementos html
  h3Producto.appendChild(h3Texto);
  pPrecio.appendChild(pPrecioTexto);
  pCategoria.appendChild(pCategoriaTexto);
  buttonAgregar.appendChild(buttonAgregarTexto);

  // se arma la estructura div de la imagen
  divImgProducto.append(imgProducto);

  // se arma la estructura div con el detalle del producto
  divProductoDetalle.append(h3Producto, pPrecio, pCategoria, buttonAgregar);
  // se arma la estructura div completa del producto
  divProducto.append(divImgProducto, divProductoDetalle);

  // ADD EVENT LISTENER boton agregar al carrito:
  buttonAgregar.addEventListener("click", function () {
    agregarAlCarrito(producto);
  });

  // ADD EVENT LISTENER imagen (ventana MODAL)
  imgProducto.addEventListener("click", () => {
    mostrarModalProducto(producto);
  });

  return divProducto;
}

//-----------------------------------------------
// ARMA ELEMENTO HTML DE LAS CATEGORIAS
// ----------------------------------------------
function armarACategorias() {
  // se guarda el valor de todas las categorias existentes de los productos en un array (arrCategorias)
  const arrCategorias = [];
  for (let producto of productos) {
    arrCategorias.push(producto.categoria);
  }

  // se guarda en un nuevo array (arrCategoriasUnicas) las categorías únicas (sin repetir)
  const categoriasUnicas = function (valor, indice, elArray) {
    return elArray.indexOf(valor) === indice;
  };
  const arrCategoriasUnicas = arrCategorias.filter(categoriasUnicas);

  // se crean los nodos (elementos HTMLs) <a> con cada una de las categorías únicas
  // se guardan en el array (arrCategoriaNodos)
  const arrCategoriaNodos = [];
  for (let categoria of arrCategoriasUnicas) {
    const aCategoria = d.createElement("a");
    aCategoria.setAttribute("href", "#");
    aCategoria.addEventListener("click", function () {
      mostrarProductosFiltrados(categoria);
      mostrarBanner();
    });
    aCategoria.append(d.createTextNode(`${categoria}`));
    arrCategoriaNodos.push(aCategoria);
  }

  return arrCategoriaNodos;
}
//-----------------------------------------------
// MUESTRA LOS PRODUCTOS FILTRADOS POR CATEGORIA
// ----------------------------------------------
function mostrarProductosFiltrados(categoria) {
  const productosFiltrados = productos.filter(
    (productosFiltrados) => productosFiltrados.categoria === categoria
  );

  const arrDivProductosFiltrados = [];

  for (let producto of productosFiltrados) {
    const divProductoFiltrado = armarDivProducto(producto);
    arrDivProductosFiltrados.push(divProductoFiltrado);
  }

  // MUESTRA LOS PRODUCTOS FILTRADOS
  divIdProductos.replaceChildren(...arrDivProductosFiltrados);
}

//-----------------------------------------------
// AGREGA ITEM AL CARRITO
// ----------------------------------------------
function agregarAlCarrito(producto) {
  // Recalculo de variables globales
  contItemsCarrito++;
  sumTotalCarrito += producto.precio;

  // se crea la propiedad '.cantidad' en el objeto producto que se esta agregando al carrito y se suma +1
  producto.cantidad ? producto.cantidad++ : (producto.cantidad = 1);

  //*********SE ACTUALIZA EL LOCAL STORAGE**************
  localStorage.setItem("cantidad", contItemsCarrito);
  localStorage.setItem("sumaTotal", sumTotalCarrito);

  localStorage.setItem(producto.id, producto.cantidad);
  //****************************************************

  // Mostrar en id="minicarrito"
  const nodoItemsMinicarrito = d.createTextNode(contItemsCarrito);
  const nodoTotalMinicarrito = d.createTextNode(sumTotalCarrito);
  spanItemsMinicarrito.replaceChildren(nodoItemsMinicarrito);
  spanTotalMinicarrito.replaceChildren(nodoTotalMinicarrito);

  // si se presiona desde ventana modal, agrega mensaje informativo de acción exitosa
  const pModalmsjeTxt = d.createTextNode(`¡Se agregó el producto al carrito!`);

  if (d.querySelector(".modal")) {
    const divModalPMsje = d.querySelector(".msje-modal");
    divModalPMsje.replaceChildren(pModalmsjeTxt);
    setTimeout(() => {
      divModalPMsje.removeChild(pModalmsjeTxt);
    }, 1500);
  }
}

//-----------------------------------------------
// MUESTRA EL MODAL DEL PRODUCTO EN LA PÁGINA
//-----------------------------------------------
function mostrarModalProducto(producto) {
  const divProductoModal = armarDivModalProducto(producto);
  divIdProductos.after(divProductoModal);
}

// ----------------------------------------------
// ARMAR ELEMENTO HTML DEL MODAL DEL PRODUCTO
// ----------------------------------------------
function armarDivModalProducto(producto) {
  // arma de base el DIV que se arma para un producto a mostrar
  const divProductoItem = armarDivProducto(producto);

  // elementos HTML especificos del MODAL
  const divModal = d.createElement("div");
  const pModalMsje = d.createElement("p");
  const aCerrarModal = d.createElement("a");
  const aCerrarModalX = d.createTextNode("X");
  const divIdGaleria = d.createElement("div");
  const divImgProducto = d.createElement("div");
  const imgImgProducto = d.createElement("img");
  const divCarousel = d.createElement("div");
  const divMiniImgs = d.createElement("div");
  const imgAnt = d.createElement("img");
  const imgSig = d.createElement("img");
  const imgMini1 = d.createElement("img");
  const imgMini2 = d.createElement("img");
  const imgMini3 = d.createElement("img");
  const pDescripcionModal = d.createElement("p");
  const pDescripcionModalTexto = d.createTextNode(producto.descripcion);

  // atributos y Textos específicos del MODAL
  divModal.setAttribute("class", "modal");
  divModal.setAttribute("id", "modalProducto");
  pModalMsje.setAttribute("class", "msje-modal");
  aCerrarModal.setAttribute("class", "cerrar");
  aCerrarModal.setAttribute("href", "javascript:void(0)");
  aCerrarModal.appendChild(aCerrarModalX);
  divIdGaleria.setAttribute("id", "galeria");
  divImgProducto.setAttribute("class", "bg-img-producto");
  imgImgProducto.setAttribute("src", `img/${producto.imagen}`);
  imgImgProducto.setAttribute("alt", producto.alt);
  imgImgProducto.setAttribute("id", "foto-grande");
  imgAnt.setAttribute("src", "img/prev.png");
  imgAnt.setAttribute("alt", "Anterior");
  imgAnt.setAttribute("id", "foto-anterior");
  imgSig.setAttribute("src", "img/next.png");
  imgSig.setAttribute("alt", "Siguiente");
  imgSig.setAttribute("id", "foto-siguiente");
  imgMini1.setAttribute("src", `img/${producto.imagenes[0]}`);
  imgMini1.setAttribute("alt", "Miniatura #1");
  imgMini2.setAttribute("src", `img/${producto.imagenes[1]}`);
  imgMini2.setAttribute("alt", "Miniatura #2");
  imgMini3.setAttribute("src", `img/${producto.imagenes[2]}`);
  imgMini3.setAttribute("alt", "Miniatura #3");
  pDescripcionModal.appendChild(pDescripcionModalTexto);

  // Arma div para las imagenes del Carrusel
  divImgProducto.append(imgImgProducto);
  divMiniImgs.append(imgMini1, imgMini2, imgMini3);
  divCarousel.append(imgAnt, divMiniImgs, imgSig);
  divIdGaleria.append(divImgProducto, divCarousel);
  // forEach y add event listener de cada miniatura: muestra la imagen grande correspondiente y actualiza posActualImg
  const imagenesCarousel = divMiniImgs.querySelectorAll("img");

  // se limpia la posición de las imagenes del carrousel
  posActualImg = 0;

  imagenesCarousel.forEach((img, i) => {
    img.addEventListener("click", (e) => {
      imgImgProducto.src = e.target.src;
      imagenesCarousel[posActualImg].style.opacity = "30%";
      posActualImg = i;
      imagenesCarousel[posActualImg].style.opacity = "100%";
    });
  });

  //función que navega sobre las imagenes de las miniaturas
  const NavegacionImgs = function (direccion) {
    // determina sentido
    let sentido = 0;
    if (direccion === "sig") {
      sentido = 1;
    } else {
      sentido = -1;
    }
    // se aumenta la opacidad al elemento que estaba antes seleccionado
    imagenesCarousel[posActualImg].style.opacity = "30%";
    // actualiza posición actual
    posActualImg += 1 * sentido;
    // control de topes
    if (posActualImg > posFinalImg) {
      posActualImg = posFinalImg;
    }
    if (posActualImg < posInicialImg) {
      posActualImg = posInicialImg;
    }
    // se quita la opacidad al elemento ahora seleccionado
    imagenesCarousel[posActualImg].style.opacity = "100%";
    // cambia la imagen grande
    imgImgProducto.src = imagenesCarousel[posActualImg].src;
  };

  // add event listener del boton anterior: llama a la función navegar con parámetro "ant"
  imgAnt.addEventListener("click", (e) => {
    NavegacionImgs("ant");
  });

  // add event listener del boton siguiente: llama a la función navegar con parámetro "sig"
  imgSig.addEventListener("click", (e) => {
    NavegacionImgs("sig");
  });

  // teclas flechas izquierda y derecha
  //-----------------------------------
  funcionArrow = NavegacionImgs;

  // se arma la estructura completa de la ventana modal
  // modificando la original y agregando algunos elementos nuevos
  const divModalDetalle = divProductoItem.querySelector("div:nth-child(2)");
  const h3ModalProducto = divModalDetalle.querySelector("h3");
  divModalDetalle.prepend(aCerrarModal);
  aCerrarModal.after(divIdGaleria);
  divModalDetalle.append(pModalMsje);
  h3ModalProducto.after(pDescripcionModal);
  divModal.append(divModalDetalle);

  armarListenerCerrarModal(aCerrarModal, divModal);

  return divModal;
}

// ----------------------------------------------
// MUESTRA ELEMENTO HTML DEL MODAL DEL CARRITO
// ----------------------------------------------
function verCarrito() {
  const divCarritoModal = armarDivCarrito();
  divIdProductos.after(divCarritoModal);
}

// ----------------------------------------------
// ARMAR ELEMENTO HTML DEL MODAL DEL CARRITO
// ----------------------------------------------
function armarDivCarrito() {
  // arma elementos HTML
  const divCarritoModal = d.createElement("div");
  const divCarrito = d.createElement("div");
  const aCerrarCarrito = d.createElement("a");
  const pCarrito = d.createElement("p");
  const hrCarrito = d.createElement("hr");
  const ulCarrito = d.createElement("ul");
  const buttonCarritoVaciar = d.createElement("button");
  const buttonCarritoCheckout = d.createElement("button");

  // Activa el estilo del estado del boton segun el estado booleano
  buttonCarritoCheckout.disabled = contItemsCarrito ? false : true;

  // elemento <button> (checkout)
  // ---------------------
  buttonCarritoCheckout.addEventListener("click", () => {
    divCarritoModal.remove();
    const FormModalCheckout = armarFormCheckout();
    divIdProductos.after(FormModalCheckout);
  });

  // arma sub-elementos HTML
  const spanItemsCarrito = d.createElement("span");
  const spanTotalCarrito = d.createElement("span");

  // arma atributos HMTL
  divCarritoModal.setAttribute("class", "modal");
  divCarritoModal.setAttribute("id", "modalCarrito");
  aCerrarCarrito.setAttribute("class", "cerrar");
  aCerrarCarrito.setAttribute("href", "javascript:void(0)");
  buttonCarritoVaciar.setAttribute("class", "btnVaciarCarrito");

  // arma nodos de texto HTML
  const aCerrarTexto = d.createTextNode("X");
  const pItemsTexto = d.createTextNode("Items: ");
  const pTotalTexto = d.createTextNode("Total: ");
  const spanItemsTexto = d.createTextNode(`${contItemsCarrito} `);
  const spanTotalTexto = d.createTextNode(`$${sumTotalCarrito}`);
  const buttonVaciarTexto = d.createTextNode("Vaciar");
  const buttonCheckoutTexto = d.createTextNode("Ir al checkout");

  // ***** arma la estructura HTML final *****

  // elemento <a> (cerrar)
  // ---------------------
  aCerrarCarrito.appendChild(aCerrarTexto);

  armarListenerCerrarModal(aCerrarCarrito, divCarritoModal);

  // elemento <p>
  // ------------
  spanItemsCarrito.appendChild(spanItemsTexto);
  spanTotalCarrito.appendChild(spanTotalTexto);
  pCarrito.append(pItemsTexto, spanItemsCarrito, pTotalTexto, spanTotalCarrito);

  // se arma dinámicamente los <li> con los productos que están en el carrito
  const productosEnCarrito = productos.filter((producto) => producto.cantidad);

  for (let producto of productosEnCarrito) {
    const totalPrecioProducto = producto.precio * producto.cantidad;
    //
    const liCarrito = d.createElement("li");
    const spanItemCarritoLi = d.createElement("span");
    const spanTotalCarritoLi = d.createElement("span");
    const aItemEliminar = d.createElement("a");
    const imgItemEliminar = d.createElement("img");
    aItemEliminar.setAttribute("href", "#");
    imgItemEliminar.setAttribute("src", "img/icon-eliminar.svg");
    imgItemEliminar.setAttribute("alt", "eliminar item");
    imgItemEliminar.setAttribute("class", "icono-eliminar-item");
    //

    aItemEliminar.addEventListener("click", () => {
      // se actualizan las variables globales
      sumTotalCarrito -= totalPrecioProducto;
      contItemsCarrito -= producto.cantidad;

      // se actualiza el objeto producto
      producto.cantidad = 0;

      // SE ACTUALIZAN LOS VALORES EN LOCAL STORAGE
      localStorage.setItem("sumaTotal", sumTotalCarrito);
      localStorage.setItem("cantidad", contItemsCarrito);
      localStorage.setItem(producto.id, producto.cantidad);
      //******************************************

      // se refleja en el HTML
      divCarritoModal.remove();
      verCarrito();

      // SE ACTUALIZAN LOS VALORES EN LOCAL STORAGE DEL MINICARRITO
      spanItemsMinicarrito.replaceChildren(d.createTextNode(contItemsCarrito));
      spanTotalMinicarrito.replaceChildren(d.createTextNode(sumTotalCarrito));
      //***************************************************************************
    });

    const liNombreProductoTexto = d.createTextNode(`${producto.nombre}\u00A0`);
    const spanTotalLiTexto = d.createTextNode(`$${totalPrecioProducto}\u00A0`);
    const spanItemsLiTexto = d.createTextNode(
      `${producto.cantidad} items\u00A0`
    );
    //
    // elementos <li>
    spanTotalCarritoLi.appendChild(spanTotalLiTexto);
    spanItemCarritoLi.appendChild(spanItemsLiTexto);
    aItemEliminar.append(imgItemEliminar);
    //
    liCarrito.append(
      liNombreProductoTexto,
      spanTotalCarritoLi,
      spanItemCarritoLi,
      aItemEliminar
    );
    // se refleja el <li> creado en el <ul>
    ulCarrito.append(liCarrito);
  }

  // elementos <button>
  // ------------------
  buttonCarritoVaciar.appendChild(buttonVaciarTexto);
  buttonCarritoVaciar.addEventListener("click", () => {
    contItemsCarrito = 0;
    sumTotalCarrito = 0;

    // SE ACTUALIZAN LOS VALORES EN LOCAL STORAGE
    localStorage.clear();
    //********************************************

    for (let producto of productosEnCarrito) {
      producto.cantidad = 0;
    }

    //
    ulCarrito.remove();
    spanItemsCarrito.replaceChildren(d.createTextNode(`${contItemsCarrito} `));
    spanTotalCarrito.replaceChildren(d.createTextNode(`${sumTotalCarrito} `));
    spanItemsMinicarrito.replaceChildren(
      d.createTextNode(`${contItemsCarrito} `)
    );
    spanTotalMinicarrito.replaceChildren(
      d.createTextNode(`${sumTotalCarrito} `)
    );
  });
  buttonCarritoCheckout.appendChild(buttonCheckoutTexto);

  // SE ARMA EL DIV DEL CARRITO
  // --------------------------
  divCarrito.append(
    aCerrarCarrito,
    pCarrito,
    hrCarrito,
    ulCarrito,
    buttonCarritoVaciar,
    buttonCarritoCheckout
  );

  divCarritoModal.append(divCarrito);

  return divCarritoModal;
}

// ----------------------------------------------
//  SE MUESTRA EL BANNER ANUNCIO PROMO
// ----------------------------------------------

function mostrarBanner() {
  // se crea un nuevo array con los productos que tengan la propiedad promo (para el banner)
  const productosPromo = productos.filter((producto) => producto.promo);

  // determina de manera aleatoria, cual banner mostrar
  const productoRandom = Math.round(
    Math.random() * (productosPromo.length - 1)
  );

  // arma el modal banner con el producto seleccionado por el random y lo escribe en la página
  const divModalBanner = armarDivModalBanner(productosPromo[productoRandom]);
  divIdProductos.after(divModalBanner);

  // despues de 10 segundos, se cierra solo el banner
  setTimeout(() => {
    divModalBanner.remove();
  }, 10000);

  //Contador cuenta regresiva del cierre del Banner promo
  const pContadorBanner = divModalBanner.querySelector(".contador");
  const divBanner = divModalBanner.querySelector("div");
  const aCerrarBanner = d.createElement("a");
  const XcerrarBannerTexto = d.createTextNode("X");

  aCerrarBanner.setAttribute("class", "cerrar");
  aCerrarBanner.setAttribute("href", "javascript:void(0)");

  aCerrarBanner.appendChild(XcerrarBannerTexto);

  // ADD EVENT LISTENER boton cerrar BANNER MODAL:
  aCerrarBanner.addEventListener("click", () => {
    // se remueve el elemento MODAL en el HTML
    divModalBanner.remove();
  });

  let contadorCierreBanner = 10;
  let fx = setInterval(() => {
    contadorCierreBanner--;
    const cuentaRegresivaBannerTexto = d.createTextNode(
      `${contadorCierreBanner}...`
    );
    pContadorBanner.replaceChildren(cuentaRegresivaBannerTexto);
    if (contadorCierreBanner <= 5) divBanner.prepend(aCerrarBanner);
    if (contadorCierreBanner <= 0) clearInterval(fx);
  }, 1000);
}

// ----------------------------------------------
//  SE ARMA HTML MODAL BANNER PROMO
// ----------------------------------------------

function armarDivModalBanner(producto) {
  // arma elementos HTML
  const divBannerModal = d.createElement("div");
  const divBanner = d.createElement("div");
  const pContadorBanner = d.createElement("p");
  const imgBanner = d.createElement("img");
  const buttonAccion = d.createElement("button");

  divBannerModal.setAttribute("class", "modal");
  divBannerModal.setAttribute("id", "modalBanner");
  pContadorBanner.setAttribute("class", "contador");
  imgBanner.setAttribute("src", `img/${producto.promo}`);
  imgBanner.setAttribute("alt", "promo");
  buttonAccion.setAttribute("class", "btn-promo");

  const buttonAccionTexto = d.createTextNode("Ver más detalles");
  const pContadorBannerTexto = d.createTextNode("10...");

  buttonAccion.appendChild(buttonAccionTexto);
  pContadorBanner.appendChild(pContadorBannerTexto);
  divBanner.append(pContadorBanner, imgBanner, buttonAccion);
  divBannerModal.append(divBanner);

  buttonAccion.addEventListener("click", () => {
    divBannerModal.remove();
    mostrarModalProducto(producto);
  });

  return divBannerModal;
}

//-------------------------------------------------------
// SE ARMA EL ELEMENTO FORMULARIO HTML DEL MODAL CHEKOUT
// ------------------------------------------------------

function armarFormCheckout() {
  //Funciones para el armado de elementos
  const CrearOption = (contenido = "", valor = null) => {
    let option = d.createElement("option");
    const contenidoOpcion = d.createTextNode(contenido);
    option.appendChild(contenidoOpcion);
    option.value = valor ? valor : contenido;
    return option;
  };
  // elementos HTML especificos del FORM-CKECKOUT MODAL
  const divFormModal = d.createElement("div");
  const aCerrarModal = d.createElement("a");
  const aCerrarModalX = d.createTextNode("X");
  const aVolverModal = d.createElement("a");
  const aVolverModaltexto = d.createTextNode("< Volver");
  const divForm = d.createElement("div");
  const divFormulario = d.createElement("div");

  // elemento html, Mensaje = "completar campos obligatorios"

  const pModalMsjeForm = d.createElement("p");

  pModalMsjeForm.setAttribute("class", "msje-modal-form");

  const pModalMsjeFormTexto = d.createTextNode(
    "* Complete los campos obligatorios resaltados"
  );
  // -------------------------------------------------------

  ///////////////////
  // elementos HTML especificos del FORM-DATOS
  const divFormDatos = d.createElement("div");
  const formulario = d.createElement("form");
  const h3FormDatos = d.createElement("h3");
  const h3FormDatosTexto = d.createTextNode("Datos");
  // -------------------------------------------------------
  const divformularioDatos = d.createElement("div");
  // elementos HTML especificos del FORM-DATOS : INPUT NOMBRE Y APELLIDO
  const divFormDatosNombreYapellido = d.createElement("div");
  const inputNombre = d.createElement("input");
  const inputApellido = d.createElement("input");
  // elementos HTML especificos del FORM-DATOS : IMPUT EMAIL
  const inputEmail = d.createElement("input");
  // elementos HTML especifico del FORM-DATOS : FIELDSET, SELECT PREFIJO E INPUT TELEFONO
  const fieldsetTel = d.createElement("fieldset");
  const selectPrefijoTel = d.createElement("select");
  for (let prefijo of prefijoTelefonos) {
    const option = CrearOption(prefijo);
    selectPrefijoTel.append(option);
  }

  const inputTel = d.createElement("input");
  ///////////////////
  // elementos HTML especificos del FORM-PAGO
  const divFormPago = d.createElement("div");
  const h3FormPago = d.createElement("h3");
  const h3FormPagoTexto = d.createTextNode("Método de pago");
  const divformularioPago = d.createElement("div");
  // elementos HTML especificos del FORM-PAGO : FIELDSET, SELECT TIPO DE TARJETA Y NÚMERO DE TARJETA
  const fieldsetTarjeta = d.createElement("fieldset");
  const LegendTarjeta = d.createElement("legend");
  const LegendTarjetaTexto = d.createTextNode("Número de tarjeta");
  const selectTipoTarjeta = d.createElement("select");
  for (let tarjeta of tarjetasTipo) {
    const option = CrearOption(tarjeta);
    selectTipoTarjeta.append(option);
  }

  const inputNumeroTarjeta = d.createElement("input");
  // elementos HTML especificos del FORM-PAGO : INPUT SEGURIDAD-TARJETA
  const divFormPagoSeguridadTarjeta = d.createElement("div");
  // elementos HTML especificos del FORM-PAGO : INPUT SEGURIDAD-TARJETA: fecha expiración de tarjeta
  const divFormPagoFecha = d.createElement("div");
  const labelFormPagoFecha = d.createElement("label");
  const labelFormPagoFechaTexto = d.createTextNode("Fecha de expiración");
  const inputFormPagoFecha = d.createElement("input");
  // elementos HTML especificos del FORM-PAGO : INPUT SEGURIDAD-TARJETA: código de seguridad de la tarjeta
  const divFormPagoCodigo = d.createElement("div");
  const labelFormPagoCodigo = d.createElement("label");
  const labelFormPagoCodigoTexto = d.createTextNode("Código de seguridad");
  const inputFormPagoCodigo = d.createElement("input");
  ///////////////////
  // elementos HTML especificos del FORM-UBICACIÓN
  const divFormUbicacion = d.createElement("div");
  const h3FormUbicacion = d.createElement("h3");
  const h3FormUbicacionTexto = d.createTextNode("¿Dónde lo enviamos?");
  const divformularioUbicacion = d.createElement("div");
  // elementos HTML especificos del FORM-UBICACIÓN : FIELDSET, SELECT PAÍS Y PROVINCIA
  const fieldsetPaisYprovincia = d.createElement("fieldset");
  const LegendPaisYprovincia = d.createElement("legend");
  const LegendPaisYprovinciaTexto = d.createTextNode("País y Provincia");
  const selectPais = d.createElement("select");
  const selectProvincia = d.createElement("select");
  // se generan las opciones del select pais-provincia
  for (const pais in paisesProvincias) {
    selectPais.append(CrearOption(pais));
  }

  /// ARGENTINA, opción País por Default
  const ProvinciaContenido = (pais = "Argentina") => {
    const arrOptionProvincias = [];
    for (const prov of paisesProvincias[pais]) {
      arrOptionProvincias.push(CrearOption(prov));
    }

    selectProvincia.replaceChildren(...arrOptionProvincias);
  };

  ProvinciaContenido();

  selectPais.addEventListener("change", () => {
    ProvinciaContenido(selectPais.value);
  });

  // elementos HTML especificos del FORM-UBICACIÓN : FIELDSET DOMICILIO, INPUT CALLE Y NUMERACIÓN
  const fieldsetDomicilio = d.createElement("fieldset");
  const LegendDomicilio = d.createElement("legend");
  const LegendDomicilioTexto = d.createTextNode("Domicilio");
  const inputDomicilioCalle = d.createElement("input");
  const inputDomicilioNumero = d.createElement("input");
  ///////////////////
  // elementos HTML especificos del FORM-CONTINUAR
  const divFormContinuar = d.createElement("div");
  // elementos HTML especificos del FORM-CONTINUAR : INPUT FECHA DE ENTREGA DEL PRODUCTO
  const divFormInputFechaEntrega = d.createElement("div");
  const labelFormInputFechaEntrega = d.createElement("label");
  const labelFormInputFechaEntregaTexto = d.createTextNode(
    "Fecha de entrega del pedido"
  );
  const inputFormInputFechaEntrega = d.createElement("input");
  // elementos HTML especificos del FORM-CONTINUAR : CHECKBOX CONFIRMACIÓN
  const divFormContinuarCheckbox = d.createElement("div");
  const inputFormContinuarCheckbox = d.createElement("input");
  const labelFormContinuarCheckbox = d.createElement("label");
  const labelFormContinuarCheckboxTexto = d.createTextNode(
    "Confirmación de datos ingresados correctos"
  );
  // elementos HTML especificos del FORM-CONTINUAR : BUTTON CONTINUAR PEDIDO
  const submitFormContinuar = d.createElement("button");
  const submitFormContinuarTexto = d.createTextNode("Continuar con el pedido");

  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  // atributos y Textos específicos del MODAL CHEKOUT
  divFormModal.setAttribute("class", "modal");
  divFormModal.setAttribute("id", "modalFormulario");
  aCerrarModal.setAttribute("class", "cerrar");
  aCerrarModal.setAttribute("href", "javascript:void(0)");
  aCerrarModal.appendChild(aCerrarModalX);
  aVolverModal.setAttribute("class", "volver");
  aVolverModal.setAttribute("href", "javascript:void(0)");
  aVolverModal.appendChild(aVolverModaltexto);
  // divFormulario.setAttribute("class", "formulario");
  formulario.setAttribute("class", "formulario");
  ///////////////////
  // atributos y Textos específicos del MODAL CHEKOUT: FORM-DATOS
  divFormDatos.setAttribute("class", "form form-datos");
  divformularioDatos.setAttribute("class", "flex");
  h3FormDatos.appendChild(h3FormDatosTexto);
  divFormDatosNombreYapellido.setAttribute("class", "input-nombre");
  inputNombre.setAttribute("name", "nombre");
  inputNombre.setAttribute("placeholder", "Nombre");
  inputNombre.setAttribute("type", "text");
  // inputNombre.setAttribute("required", "true");
  inputApellido.setAttribute("name", "apellido");
  inputApellido.setAttribute("placeholder", "Apellido");
  inputApellido.setAttribute("type", "text");
  // inputApellido.setAttribute("required", "true");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("placeholder", "Correo Electrónico");
  inputEmail.setAttribute("type", "email");
  // inputEmail.setAttribute("required", "true");
  selectPrefijoTel.setAttribute("name", "prefijo");
  selectPrefijoTel.setAttribute("id", "numTelefono");
  inputTel.setAttribute("name", "numero");
  inputTel.setAttribute("placeholder", "Número Telefónico");
  inputTel.setAttribute("type", "number");

  ///////////////////
  // atributos y Textos específicos del MODAL CHEKOUT: FORM-PAGO
  divFormPago.setAttribute("class", "form form-pago");
  divformularioPago.setAttribute("class", "flex");
  h3FormPago.appendChild(h3FormPagoTexto);
  LegendTarjeta.appendChild(LegendTarjetaTexto);
  selectTipoTarjeta.setAttribute("name", "tipo-tarjeta");
  inputNumeroTarjeta.setAttribute("name", "numero-tarjeta");
  inputNumeroTarjeta.setAttribute("placeholder", "Ej: 1111-1111-1111-1111");
  inputNumeroTarjeta.setAttribute("maxlenght", "16");
  inputNumeroTarjeta.setAttribute("type", "number");
  divFormPagoSeguridadTarjeta.setAttribute("class", "tarjeta-seguridad");
  divFormPagoFecha.setAttribute("class", "input-columna");
  labelFormPagoFecha.appendChild(labelFormPagoFechaTexto);
  inputFormPagoFecha.setAttribute("name", "fecha");
  inputFormPagoFecha.setAttribute("type", "date");
  divFormPagoCodigo.setAttribute("class", "input-columna");
  labelFormPagoCodigo.appendChild(labelFormPagoCodigoTexto);
  inputFormPagoCodigo.setAttribute("name", "numeracion");
  inputFormPagoCodigo.setAttribute("placeholder", "Ej: 123");
  inputFormPagoCodigo.setAttribute("type", "number");

  ///////////////////
  // atributos y Textos específicos del MODAL CHEKOUT: FORM-UBICACIÓN
  divFormUbicacion.setAttribute("class", "form form-ubicacion");
  divformularioUbicacion.setAttribute("class", "flex");
  h3FormUbicacion.appendChild(h3FormUbicacionTexto);
  LegendPaisYprovincia.appendChild(LegendPaisYprovinciaTexto);
  selectPais.setAttribute("name", "pais");
  selectProvincia.setAttribute("name", "provincia");
  fieldsetDomicilio.setAttribute("class", "domicilio");
  LegendDomicilio.appendChild(LegendDomicilioTexto);
  inputDomicilioCalle.setAttribute("name", "calle");
  inputDomicilioCalle.setAttribute("placeholder", "Calle");
  inputDomicilioCalle.setAttribute("type", "text");
  // inputDomicilioCalle.setAttribute("required", "true");
  inputDomicilioNumero.setAttribute("name", "numeracion");
  inputDomicilioNumero.setAttribute("placeholder", "N°");
  inputDomicilioNumero.setAttribute("type", "number");
  // inputDomicilioNumero.setAttribute("required", "true");
  ///////////////////
  // atributos y Textos específicos del MODAL CHEKOUT: FORM-CONTINUAR
  divFormContinuar.setAttribute("class", "form form-continuar");
  // divFormContinuar.setAttribute("class", "form-continuar");
  divFormInputFechaEntrega.setAttribute("class", "input-fecha input-columna");
  // divFormInputFechaEntrega.setAttribute("class", "input-columna");
  labelFormInputFechaEntrega.appendChild(labelFormInputFechaEntregaTexto);
  inputFormInputFechaEntrega.setAttribute("name", "fecha");
  inputFormInputFechaEntrega.setAttribute("type", "date");
  inputFormContinuarCheckbox.setAttribute("type", "checkbox");
  inputFormContinuarCheckbox.setAttribute("name", "check");
  inputFormContinuarCheckbox.setAttribute("id", "confirmacion");
  inputFormContinuarCheckbox.setAttribute("value", "confirmacion");
  // inputFormContinuarCheckbox.setAttribute("required", "true");
  labelFormContinuarCheckbox.setAttribute("for", "confirmacion");
  labelFormContinuarCheckbox.appendChild(labelFormContinuarCheckboxTexto);
  submitFormContinuar.setAttribute("type", "submit");
  // submitFormContinuar.setAttribute("disabled", "true");
  submitFormContinuar.setAttribute("class", "btn-enviar");
  submitFormContinuar.appendChild(submitFormContinuarTexto);

  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  //Addeventlisteners del formulario Modal

  armarListenerCerrarModal(aCerrarModal, divFormModal);

  aVolverModal.addEventListener("click", () => {
    divFormModal.remove();
    verCarrito();
  });

  /////////////////////////////////////////////////////
  // se arma la estructura completa de la ventana MODAL CHEKOUT
  divFormModal.append(aCerrarModal, aVolverModal, divForm);
  divForm.append(divFormulario);
  // se arma la estructura completa de la ventana MODAL CHEKOUT: FORM-DATOS
  divFormulario.append(formulario, pModalMsjeForm);

  divFormPago.append(h3FormPago, divformularioPago);
  divFormUbicacion.append(divformularioUbicacion);

  // divFormDatos.append(formulario);

  divFormDatos.append(h3FormDatos, divformularioDatos);

  formulario.append(
    divFormDatos,
    divFormPago,
    divFormUbicacion,
    divFormContinuar
  );

  divformularioDatos.append(
    divFormDatosNombreYapellido,
    inputEmail,
    fieldsetTel
  );
  // se arma la estructura del: DIV INPUT NOMBRE Y APELLIDO DEL FORM-DATOS
  divFormDatosNombreYapellido.append(inputNombre, inputApellido);
  // se arma la estructura del: FIELDSET SELECT PREFIJO Y NÚMERO TELEFÓNICO DEL FORM-DATOS
  fieldsetTel.append(selectPrefijoTel, inputTel);
  //////////////////
  /////////////////

  // se arma la estructura completa de la ventana MODAL CHEKOUT: FORM-PAGO
  // se arma la estructura del: FORM DEL DIV FORM-PAGO
  divformularioPago.append(fieldsetTarjeta, divFormPagoSeguridadTarjeta);
  // se arma la estructura del: FIELDSET DEL SELECTOR E INPUT N° DE TARJETA DEL FORM-PAGO
  fieldsetTarjeta.append(LegendTarjeta, selectTipoTarjeta, inputNumeroTarjeta);
  // se arma la estructura del: DIV SEGÚRIDAD DE LA TARJETA DEL FORM-PAGO
  divFormPagoSeguridadTarjeta.append(divFormPagoFecha, divFormPagoCodigo);
  // se arma la estructura del: DIV FECHA DE EXPIRACIÓN DE TARJETA DEL FORM-PAGO
  divFormPagoFecha.append(labelFormPagoFecha, inputFormPagoFecha);
  // se arma la estructura del: DIV FIELDSET CÓDIGO DE SEGURIDAD DE TARJETA DEL FORM-PAGO
  divFormPagoCodigo.append(labelFormPagoCodigo, inputFormPagoCodigo);
  //////////////////
  //////////////////
  // se arma la estructura completa de la ventana MODAL CHEKOUT: FORM-UBICACION
  // divFormUbicacion.append(h3FormUbicacion, divformularioUbicacion);
  divformularioUbicacion.append(
    h3FormUbicacion,
    fieldsetPaisYprovincia,
    fieldsetDomicilio
  );
  // se arma la estructura del: FIELDSET PAÍS Y PROVINCIA DEL FORM-UBICACION
  fieldsetPaisYprovincia.append(
    LegendPaisYprovincia,
    selectPais,
    selectProvincia
  );
  // se arma la estructura del: FIELDSET DOMICILIO DEL FORM-UBICACION
  fieldsetDomicilio.append(
    LegendDomicilio,
    inputDomicilioCalle,
    inputDomicilioNumero
  );
  //////////////////
  //////////////////
  // se arma la estructura completa de la ventana MODAL CHEKOUT: FORM-CONTINUAR
  divFormContinuar.append(
    divFormInputFechaEntrega,
    divFormContinuarCheckbox,
    submitFormContinuar
  );

  // se arma la estructura del: DIV FECHA DE ENTREGA DEL PEDIDO PARA CONTINUAR
  divFormInputFechaEntrega.append(
    labelFormInputFechaEntrega,
    inputFormInputFechaEntrega
  );
  // se arma la estructura del: DIV CHECKBOX PARA CONTINUAR
  divFormContinuarCheckbox.append(
    inputFormContinuarCheckbox,
    labelFormContinuarCheckbox
  );

  let enviarFormCheckout = true;

  //  -------------------------------------------------------
  //Validaciones al momento del SUBMIT

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    enviarFormCheckout = true;

    inputNombre.style.borderBottom = "3px solid #00d2c7";
    inputApellido.style.borderBottom = "3px solid #00d2c7";
    inputDomicilioCalle.style.borderBottom = "3px solid #00d2c7";
    inputDomicilioNumero.style.borderBottom = "3px solid #00d2c7";
    labelFormContinuarCheckbox.style.color = "#00d2c7";

    if (
      inputNombre.value === "" ||
      inputApellido.value === "" ||
      inputDomicilioCalle.value === "" ||
      inputDomicilioNumero.value === "" ||
      !inputFormContinuarCheckbox.checked
    ) {
      enviarFormCheckout = false;
    }

    if (inputNombre.value === "") {
      inputNombre.style.borderBottom = "3px solid #bd398d";
    }

    if (inputApellido.value === "") {
      inputApellido.style.borderBottom = "3px solid #bd398d";
    }

    if (inputDomicilioCalle.value === "") {
      inputDomicilioCalle.style.borderBottom = "3px solid #bd398d";
    }

    if (inputDomicilioNumero.value === "") {
      inputDomicilioNumero.style.borderBottom = "3px solid #bd398d";
    }

    if (!inputFormContinuarCheckbox.checked) {
      labelFormContinuarCheckbox.style.color = "#bd398d";
    }

    if (enviarFormCheckout) {
      // OK:
      divFormModal.remove();
      verMiPedido();
    } else {
      // ERROR:
      pModalMsjeForm.replaceChildren(pModalMsjeFormTexto);
      e.preventDefault();
    }
  });

  return divFormModal;
}

function verMiPedido() {
  const miPedidoModal = armarMiPedidoModal();
  divIdProductos.after(miPedidoModal);
}

//------------------------------------------------------------------------------
// SE ARMA ELEMENTOS ESPECIFICOS DEL HTML MODAL "MI PEDIDO"
// -----------------------------------------------------------------------------
function armarMiPedidoModal() {
  const divModalPedido = d.createElement("div");
  const divPedido = d.createElement("div");
  const aCerrarModal = d.createElement("a");
  const aCerrarModalX = d.createTextNode("X");
  const aVolverModal = d.createElement("a");
  const aVolverModaltexto = d.createTextNode("< Volver");

  // -------------------
  armarListenerCerrarModal(aCerrarModal, divModalPedido);

  aVolverModal.addEventListener("click", () => {
    divModalPedido.remove();
    divIdProductos.after(armarFormCheckout());
  });

  // -------------------
  divPedido.setAttribute("id", "miPedido");
  aCerrarModal.setAttribute("class", "cerrar");
  aCerrarModal.setAttribute("href", "javascript:void(0)");
  aCerrarModal.appendChild(aCerrarModalX);
  aVolverModal.setAttribute("class", "volver");
  aVolverModal.setAttribute("href", "javascript:void(0)");
  aVolverModal.appendChild(aVolverModaltexto);
  // -------------------

  const h3MiPedido = d.createElement("h3");
  const h3MiPedidoTexto = d.createTextNode("Mi Pedido");
  const hrMiPedido = d.createElement("hr");
  const ulMiPedido = d.createElement("ul");

  divModalPedido.setAttribute("class", "modal");

  h3MiPedido.append(h3MiPedidoTexto);

  //----------------------------------
  //--- productos agregados al carrito

  const productosEnCarrito = productos.filter((producto) => producto.cantidad);
  for (let producto of productosEnCarrito) {
    const liMiPedido = d.createElement("li");
    const spanTotalMiPedido = d.createElement("span");
    const spanCantidadMiPedido = d.createElement("span");
    const descripcionProductoTexto = d.createTextNode(producto.nombre);
    const spanTotalMiPedidoTexto = d.createTextNode(`$${producto.precio}`);

    const spanCantidadMiPedidoTexto = d.createTextNode(producto.cantidad);

    const spanCantidadUnidad = d.createElement("span");
    const cantidadUnidadTexto = d.createTextNode(
      producto.cantidad === 1 ? "Unidad" : "Unidades"
    );
    spanCantidadUnidad.append(cantidadUnidadTexto);

    spanTotalMiPedido.append(spanTotalMiPedidoTexto);
    spanCantidadMiPedido.append(spanCantidadMiPedidoTexto);
    liMiPedido.append(
      descripcionProductoTexto,
      spanTotalMiPedido,
      spanCantidadMiPedido,
      spanCantidadUnidad
    );
    ulMiPedido.append(liMiPedido);
  }

  //-------------------------------
  //---------------- sección total

  const divListaDePago = d.createElement("div");
  const ulListaDePago = d.createElement("ul");

  const liListaDePagoSubtotal = d.createElement("li");
  const pListaDePagoSubtotal = d.createElement("p");
  const pListaDePagoSubtotalTexto = d.createTextNode("Subtotal");
  const spanListaDePagoSubtotal = d.createElement("span");
  const spanListaDePagoSubtotalTexto = d.createTextNode(`$${sumTotalCarrito}`);
  // -------------------
  pListaDePagoSubtotal.append(pListaDePagoSubtotalTexto);
  spanListaDePagoSubtotal.append(spanListaDePagoSubtotalTexto);
  liListaDePagoSubtotal.append(pListaDePagoSubtotal, spanListaDePagoSubtotal);
  // -------------------

  const liListaDePagoEnvio = d.createElement("li");
  const pListaDePagoEnvio = d.createElement("p");
  const pListaDePagoEnvioTexto = d.createTextNode("Envío");
  const spanListaDePagoGratis = d.createElement("span");
  const spanListaDePagoGratisTexto = d.createTextNode("Gratis");
  // -------------------
  pListaDePagoEnvio.append(pListaDePagoEnvioTexto);
  spanListaDePagoGratis.append(spanListaDePagoGratisTexto);
  liListaDePagoEnvio.append(pListaDePagoEnvio, spanListaDePagoGratis);
  // -------------------

  const hrListaDePago = d.createElement("hr");

  const liListaDePagoTotal = d.createElement("li");
  const pListaDePagoTotal = d.createElement("p");
  const pListaDePagoTotalTexto = d.createTextNode("Total");
  const spanListaDePagoTotal = d.createElement("span");
  const spanListaDePagoTotalTexto = d.createTextNode(`$${sumTotalCarrito}`);

  // -------------------
  pListaDePagoTotal.append(pListaDePagoTotalTexto);
  spanListaDePagoTotal.append(spanListaDePagoTotalTexto);
  liListaDePagoTotal.append(pListaDePagoTotal, spanListaDePagoTotal);
  // -------------------

  const btnPagarMiPedido = d.createElement("button");
  const btnPagarMiPedidoTexto = d.createTextNode("Pagar mi pedido");
  btnPagarMiPedido.append(btnPagarMiPedidoTexto);

  // ----------------------------------------
  // addEventListener button

  btnPagarMiPedido.addEventListener("click", () => {
    divModalPedido.remove();
    // -------------------
    // Reseteo variables Carrito
    contItemsCarrito = 0;
    sumTotalCarrito = 0;
    spanItemsMinicarrito.replaceChildren(d.createTextNode(contItemsCarrito));
    spanTotalMinicarrito.replaceChildren(d.createTextNode(sumTotalCarrito));

    // SE ACTUALIZAN LOS VALORES EN LOCAL STORAGE
    localStorage.clear();
    //******************************************

    for (let productoCantidad of productosEnCarrito) {
      productoCantidad.cantidad = 0;
    }

    //
    divIdProductos.after(armarInfoPagoModal());
  });

  // ----------------------------------------

  divListaDePago.setAttribute("class", "listaPago");
  btnPagarMiPedido.setAttribute("class", "btnPagarPedido");

  // -----------------
  ulListaDePago.append(
    liListaDePagoSubtotal,
    liListaDePagoEnvio,
    hrListaDePago,
    liListaDePagoTotal,
    btnPagarMiPedido
  );
  divListaDePago.append(ulListaDePago);
  // -----------------
  divPedido.append(
    aCerrarModal,
    aVolverModal,
    h3MiPedido,
    hrMiPedido,
    ulMiPedido,
    divListaDePago
  );
  divModalPedido.append(divPedido);
  //-------------------------------
  return divModalPedido;
}

//---------------------------------------------------
//  SE ARMA EL HTML MODAL BANNER INFORMACIÓN DE PAGO
// --------------------------------------------------

function armarInfoPagoModal() {
  const divModalInfoPago = d.createElement("div");
  divModalInfoPago.setAttribute("class", "modal");
  const divInfoPago = d.createElement("div");
  divInfoPago.setAttribute("id", "modalInfoPago");
  const spanInfoPago = d.createElement("span");
  const spanInfoPagoTexto = d.createTextNode("Información de pago");
  // const hrInfoPago = d.createElement("hr");
  const imgInfoPago = d.createElement("img");
  imgInfoPago.setAttribute("src", "./img/compra-exitosa.svg");
  imgInfoPago.setAttribute("alt", "compra-exitosa");
  const h3InfoPago = d.createElement("h3");
  const h3InfoPagoTexto = d.createTextNode("¡Ya estamos preparando tu pedido!");
  const divInfoPagoP = d.createElement("div");
  const pInfoPago1 = d.createElement("p");
  const pInfoPagoTexto1 = d.createTextNode(
    "El pago se ha realizado correctamente."
  );
  const pInfoPago2 = d.createElement("p");
  const pInfoPagoTexto2 = d.createTextNode(
    "No olvides verificar tu comprobante de pago enviado a tu mail registrado."
  );
  const btnVolverHome = d.createElement("button");
  const btnVolverHomeTexto = d.createTextNode("Volver a la Home");

  //-------------------------------

  spanInfoPago.append(spanInfoPagoTexto);
  h3InfoPago.append(h3InfoPagoTexto);
  pInfoPago1.append(pInfoPagoTexto1);
  pInfoPago2.append(pInfoPagoTexto2);
  divInfoPagoP.append(pInfoPago1, pInfoPago2);
  btnVolverHome.append(btnVolverHomeTexto);
  divInfoPago.append(
    spanInfoPago,
    // hrInfoPago,
    imgInfoPago,
    h3InfoPago,
    divInfoPagoP,
    btnVolverHome
  );
  divModalInfoPago.append(divInfoPago);

  // -------------------
  // addEventListener button

  btnVolverHome.addEventListener("click", () => {
    divModalInfoPago.remove();
  });

  // -------------------

  return divModalInfoPago;
}
