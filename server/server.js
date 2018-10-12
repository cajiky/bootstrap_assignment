//setup express
const express = require('express');
const app = express();

//what we need to get data from ajax. always needs it here.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));







const port = 1337;
app.listen(port, () =>{
    console.log('Express is listening on Port:', port);
})