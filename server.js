'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer = require('multer');
var upload = multer();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) =>{
     res.sendFile(process.cwd() + '/views/index.html');
  });

// where the upload btn is gonna be redirected
app.post('/api/fileanalyse',upload.fields(['upfile']),(req,res)=>{
  
  res.send('something is happening!!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
