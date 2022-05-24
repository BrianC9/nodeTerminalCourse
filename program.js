const http = require("http")
const listaURLs = process.argv.slice(2)
listaURLs.forEach((url, idx) => {

    http.get(url, (res) => {
        res.setEncoding('utf-8')
        let datosRecibidos = ""
        res.on("data", (chunk) => {

            datosRecibidos += chunk;
        }).on('error', (error) => {
            console.log("Hay un error en la peticion ", error)
        })
        res.on("resume", () => {

            console.log(`Peticion numero ${idx}`)
            console.log(datosRecibidos)
        })
        res.on("close", () => {




        })
    })
})