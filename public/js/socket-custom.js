

let socket = io();

// Escuchar información

socket.on("connect", () => {

    console.log("Conectado al servidor");

})

socket.on("disconnect", () => {

    console.log("Perdimos conexión con el servidor");

})

// Enviar información

socket.emit("enviarMensaje", {

    usuario: "Mauri",
    mensaje: "Holi"

}, (resp) => {
        console.log("respuesta server: ",resp);
});

//Esuchcar información

socket.on("enviarMensaje", (mensaje) => {

    console.log(mensaje.mensaje);

})