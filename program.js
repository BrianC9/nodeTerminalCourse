const strftime = require("strftime")
const net = require("net")
const fechaHora = strftime('%Y-%m-%d %H:%M\n', new Date())
const puertoEscucha = process.argv[2]
const server = net.createServer((socket) => {
    //console.log(fechaHora)
    socket.setEncoding("utf-8")
    socket.end(fechaHora)



})


server.listen(puertoEscucha, () => {
    console.log("Servidor escuchando")
})
