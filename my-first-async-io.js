const fs = require("fs")
const file = process.argv[2]
fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
        console.log("Ha ocurrido un error en la lectura")
        return
    }
    console.log(data.split('\n').length - 1)
})
