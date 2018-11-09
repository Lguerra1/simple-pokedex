const express = require ('express')
const bodyParser = require ('body-parser')
const massive = require ('massive')
require("dotenv").config();
const {CONNECTION_STRING}=process.env
// const c_s = require ('./controller_shelfie/controller')


let app = express()

app.use(bodyParser.json())

// app.get('/api/inventory', c_s.read )
// app.post('/api/product', c_s.create)
// app.put('/api/product/:id', c_s.update)


massive(CONNECTION_STRING).then(db => {
    console.log('Database connected')
    app.set('db', db);
});

let port = 3005
app.listen(port,() => console.log(`Battle Cruiser Operational on Port ${port}`)  )
