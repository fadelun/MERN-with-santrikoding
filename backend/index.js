//import express
const express = require("express");

// import CORS
const cors = require("cors");

//import bodyParser
const bodyParser = require("body-parser");

//import router
const router = require('./routes')


//init app
const app = express();

//use cors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
//define port
const port = process.env.PORT || 3000;

//route
app.get("/", (req, res) => {
    res.send("Santri koding reactjs");
});

//define routes
app.use('/api', router);

//start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
