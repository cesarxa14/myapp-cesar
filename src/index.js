const app = require('./app');
require('./database');
// const {Server: WebSocketServer} = require('socket.io')({
//     cors
// })
const http = require('http');
const cors = require('cors')
app.use(cors());




const port = 3000;
const server = http.createServer(app);
const httpServer = server.listen(port, () => {
    console.log(`Server on port ${port}`)
})
const io = require('socket.io')(httpServer,  {
    cors: {
      origin: '*',
    }
});

io.on("connection", function (socket) {
    const idHandShake = socket.id;
    const {chatid} = socket.handshake.query;
    console.log("Hola dispositivo --> " + idHandShake);
    console.log("Dispositivo: "+ idHandShake + "Se unio al "+"Chat ID: " + chatid)

    socket.join(chatid); 

    socket.on('event', (res) => {
        const data = res;
        console.log(data);
        socket.to(chatid).emit('event', data)
    })

    socket.on('event-chat', (res) => {
        const data = res;
        console.log('socket data', data);
        socket.to(chatid).emit('event-chat', data)
    })
});


