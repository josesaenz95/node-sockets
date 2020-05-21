let socket = io();

// on => escuchar 
socket.on('connect', () => {
    console.log('Conectado al servidor');
})

socket.on('disconnect', () => {
    console.log('Perdimos conexión con el servidor');
})

// emit() => enviar información
socket.emit('sendMessage', {
    usuario: 'José Manuel',
    message: 'Hola Mundo'
}, (resp) => {
    console.log('Servidor: ', resp);
})

// Escuchar información}
socket.on('sendMessage', (message) => {
    console.log('Servidor: ', message);
})