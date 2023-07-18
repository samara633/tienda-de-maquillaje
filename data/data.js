const productos = [
    {
        id:1,
        nombre: "Base liquida",
        descripcion: "Base hidratante para el rostro",
        precio: 25.99,
        imagen: "https://a0.soysuper.com/2c0fef211221060761e56bcf310ba0a6.1500.0.0.0.wmark.1a12ea7a.jpg"
    },
    {
        id:2,
        nombre: "Mascarilla facial",
        descripcion: "Mascarilla facial de arcilla",
        precio: 12.99,
        imagen: "https://i0.wp.com/cosmeticosraquel.co/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-29-at-1.44.41-PM.jpeg"
    },
    {
        id:3,
        nombre: "corrector",
        descripcion: "tono natural",
        precio: 65.99,
        imagen: "https://static2.mujerhoy.com/www/multimedia/202206/21/media/cortadas/iluminadores-barra-11-kWqD--634x712@MujerHoy.jpg"
    },
    {
        id:4,
        nombre: "Crema hidratante",
        descripcion: "Crema hidratante para el rostro",
        precio: 35.99,
        imagen: "https://falabella.scene7.com/is/image/FalabellaCO/3706714_3?wid=800&hei=800&qlt=70"
    },
    {
        id:5,
        nombre: "labial mac",
        descripcion: "Duracion 24/7",
        precio: 65.99,
        imagen: "https://static.thcdn.com/images/large/original//productimg/1600/1600/12182262-1564850062694259.jpg"
    },
    {
        id:6,
        nombre: "sobras fshion",
        descripcion: "variedad de colores",
        precio: 45.99,
        imagen: "https://img.freepik.com/foto-gratis/varios-tipos-cosmeticos-esparcidos-sobre-mesa-beige_23-2148047013.jpg?w=2000"
    },
    {
        id:7,
        nombre: "Pestañina",
        descripcion: "larga duracion",
        precio: 65.99,
        imagen: "https://www.girlymaquillaje.com/wp-content/uploads/s-l1600-4.jpg.webp"
    },
    {
        id:8,
        nombre: "Delineador",
        descripcion: "Maxima presicion",
        precio: 15.99,
        imagen: "https://www.sibory.com/wp-content/uploads/2022/07/plumon-atenea-.jpeg"
    },
    {
        id:9,
        nombre: "Iluminador",
        descripcion: "brillo las 24 horas",
        precio: 55.99,
        imagen: "https://www.hola.com/imagenes/seleccion/20210509189086/highlighter-iluminador-maquillaje-recomendaciones/1-76-951/dior-a.jpg"
    },
    {
        id:10,
        nombre: "iluminadores",
        descripcion: "Diferentes tonos",
        precio: 105.99,
        imagen: "https://cromantic.vteximg.com.br/arquivos/ids/175716-1000-1200/paleta-de-iluminadores-palladio-I-m-Glowing-Highlighting.jpg?v=637814158823700000"
    },
    {
        id:11,
        nombre: "corrector",
        descripcion: "tono natural",
        precio: 65.99,
        imagen: "https://static2.mujerhoy.com/www/multimedia/202206/21/media/cortadas/iluminadores-barra-11-kWqD--634x712@MujerHoy.jpg"
    },
    {
        id:12,
        nombre: "labial mate",
        descripcion: "larga duracion",
        precio: 25.99,
        imagen: "https://media.glamour.mx/photos/63bfa751f8173e11a1dafbbb/1:1/w_2000,h_2000,c_limit/labiales-2023-2.jpeg"
    },
    {
        id:13,
        nombre: "sobras escarcha",
        descripcion: "que tus ojos brillen",
        precio: 65.99,
        imagen: "https://engolcollections.com/wp-content/uploads/2023/04/sombras-gliter-M22-E-1.png"
    },
    {
        id:14,
        nombre: "Paleta de sombras",
        descripcion: "Colores vivos",
        precio: 125.99,
        imagen: "https://m.media-amazon.com/images/I/51HsP05Gt7L._SL500_.jpg"
    },
    {
        id:15,
        nombre: "lapiz",
        descripcion: "Profesional para tus ojos",
        precio: 39.99,
        imagen: "https://i0.wp.com/cosmeticosraquel.co/wp-content/uploads/2020/08/lapi-portda.png?fit=800%2C800&ssl=1"
    },
    {
        id:16,
        nombre: "Delineadores de colores",
        descripcion: "maxima presicion",
        precio: 40.99,
        imagen: "https://julietamakeup.com.co/wp-content/uploads/2020/09/Tono-1-140.png"
    },
    {
        id:17,
        nombre: "crema fascial",
        descripcion: "Elimina las arrugas",
        precio: 85.99,
        imagen: "https://purpuremakeup.com/wp-content/uploads/2021/08/crema_facial_purpurefacial.webp"
    },
    {
        id:18,
        nombre: "perfume shakira",
        descripcion: "Fragancia las 24 horas",
        precio: 75.99,
        imagen: "https://i0.wp.com/irisfragancias.com/wp-content/uploads/2021/08/hawas-rasasi.jpg"
    },
    {
        id:19,
        nombre: "Perfume petalo de rosas",
        descripcion: "fragancia del jardin",
        precio: 35.99,
        imagen: "https://elmejorperfume.com/wp-content/uploads/2020/04/Perfume-la-vie-est-belle-marca-lancome-para-mujer-de-Perfumes-y-marcas-El-Mejor-Perfume-solo-originales.jpg.webp"
    },
    {
        id:20,
        nombre: "perfume loreal",
        descripcion: "fragancia unica",
        precio: 85.99,
        imagen: "https://falabella.scene7.com/is/image/FalabellaCO/64152783_1?wid=1500&hei=1500&qlt=70"
    } 
];

const contenedorProductos = document.getElementById('contenedor-productos');
function productosCarga(){
    
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <p class="producto-precio">${producto.descripcion}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });
}

productosCarga();





