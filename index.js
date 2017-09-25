const express = require('express');
const path = require('path');

var port = 3000;
var app  = express();

app.use(express.static(__dirname+'/public'));
app.get('/', (req,res)=>{
//res.send("test home page");
res.sendFile(path.join(__dirname + '/public/index.html'));
});

// have to send bundlejs file also
app.get('/bundle.js', function(req, res) {
  res.sendFile(__dirname + "/" + "public/bundle.js");
});


app.listen(port,()=>{
    console.log(`server enables at ${port}`);
});