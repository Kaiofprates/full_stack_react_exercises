const express = require('express')
const cors  = require('cors')
const path = require('path')
const banco = require('./banco')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(cors())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .set("json spaces", 4)
    //.get('/', (req, res) => res.render('pages/index'))
    .get('/:line', (req, res) => res.send(banco.getLine(req.params.line)))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
