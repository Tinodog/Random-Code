const express = require('express')

const app = express()

app.get('/*', function(req,res){res.sendFile(__dirname+req.url)})

app.listen(8080)

