const express = require('express')
const bodyParser=require('body-parser')
const PORT = 5000

const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/index')(app)
app.listen(PORT, async()=>{
    console.log(`\n✨ app is listening on port ${PORT}`)
    console.log(`✨ Server running on http://localhost:${PORT}/`)
})