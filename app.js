const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('get');
});

app.post('/',(req,res) => {
    res.send('post');
});

app.put('/',(req,res) => {
    res.send('put');
});

app.delete('/',(req,res) => {
    res.send('delete');
});

app.listen(port,() =>{
    console.log(`server runing in http://localhost:${port}`);
});
