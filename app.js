const express = require('express');
const app = express();

app.use(express.static("./frontend/public"));

app.get('/', (req, res) => {
    console.log('connected to server');
})

app.listen(5000,()=>{
    console.log(`listening on port ${port}`);
})