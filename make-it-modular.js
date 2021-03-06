const leeDir = require("./mymodule.js")
const dir = process.argv[2]
const filtro = process.argv[3]
leeDir(dir, filtro, function (error, content) {
    if (error) {
        console.log(error.message)
        return
    }
    content.forEach(element => {
        console.log(element)
    });

})

/*
Solucion de NodeSchool;
modulo externo:
const fs = require('fs')
    const path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
modulo ejecutado:
const filterFn = require('./solution_filter.js')
    const dir = process.argv[2]
    const filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })
*/