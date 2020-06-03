const express = require('express');
const fs = require('fs');
const fetch = require('node-fetch')
const app = express();
const PORT = 3333;
const path = require('path')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/art', (req, res) => {
    const url = `http://localhost:3000/articles`
    fetch(url)
    .then(blob => blob.json())
    .then((blob) => {
        if(blob) {
          console.log(blob[0].id);
          
          
          
        }
    })
})


app.listen(PORT, () => console.log(`listen on http://localhost:${PORT}`)
)