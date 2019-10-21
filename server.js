"use strict";

let express = require("express");
let cors = require("cors");

// require and use "multer"...
let multer = require("multer");
let upload = multer();

let app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

// where the upload btn is gonna be redirected
app.post(
  "/api/fileanalyse",
  upload.fields([{ name: "upfile" }]),
  (req, res) => {
    // show what is inside the upfile file
    let fileSize = req.files["upfile"][0].size;
    let fileName = req.files["upfile"][0].fieldname;

    res.send({ name: fileName, size: fileSize });
  }
);

app.listen(process.env.PORT || 3000, function() {
  console.log("Node.js listening ...");
});
