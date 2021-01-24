const express = require('express')
const app = express()
const port = 3000

// tell express where to find app files
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => res.sendFile('index.html'))

app.listen(port,() => console.log(`server begin listen on port ${port}`))