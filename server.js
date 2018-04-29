const express = require('express')
const path = require('path')
const port = process.env.PORT || 9001
const app = express()

app.use(express.static(__dirname + '/build'))

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port)
console.log("Server started at port: " + port)