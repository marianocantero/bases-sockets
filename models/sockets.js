

class Sockets {
    constructor( io ){
        this.io = io; 

        this.socketEvents();
    }

    socketEvents(){
        //OnConnection
        this.io.on('connection', ( socket ) => {
             
            //Escucnado el evento: mensaje bienvenida
                socket.on('mensaje-cliente', ( data ) => {
                console.log(data);
                this.io.emit('mensaje-from-server', data);
            });
        });
    }
}

module.exports = Sockets;
    