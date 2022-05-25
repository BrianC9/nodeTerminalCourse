const http = require("http")
const fs = require("fs")

const puertoEscucha = process.argv[2]
const fileServed = process.argv[3]

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    let readStream = fs.createReadStream(fileServed)
    readStream.on("open", () => {
        readStream.pipe(res)
    })
    readStream.on("error", (err) => res.end(err))

}).on("error", (error) => console.log)
server.listen(puertoEscucha)

