const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('sendMessage', {
        usuario: 'Administrador',
        message: 'Bienvenido a la aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar cliente
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', (data))

        // if (message.usuario) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal :('
        //     })
        // }
    })
})