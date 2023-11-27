const express = require('express')
const bodyParser=require('body-parser')
const PORT = 5000

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(PORT, async()=>{
    console.log(`\n✨ app is listening on port ${PORT}`)
    console.log(`✨ Server running on http://localhost:${PORT}/`)
})