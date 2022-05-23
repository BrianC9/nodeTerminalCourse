const fs = require("fs")
const path = require("path")

module.exports = function (dir, filtro, callback) {

    fs.readdir(dir, (err, content) => {
        if (err) return callback(err)
        let lista =
            content.filter(file => {
                if (path.extname(file) == `.${filtro}`) return file
            })
        return callback(null, lista)
    })
}