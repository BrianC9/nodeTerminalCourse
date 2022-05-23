const fs = require("fs")
const path = require("path")
const dir = process.argv[2]
const filtro = process.argv[3]

fs.readdir(dir, (error, content) => {
    if (error) {
        console.log(error)
        return
    }

    content.forEach(file => {
        if (path.extname(file) == `.${filtro}`) console.log(file)
    })
})