const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("Welcome to my channel :)")
} );

app.get("/about", function(req, res){
    res.send("here is a web developer")
} );

app.get("/contact", function(req, res){
    res.send("this is my contact no 7903791911")
} );

app.get("/calculator", function(req, res){
   // console.log(__dirname);
    res.sendFile(__dirname+"/index.html");
    
});

app.post("/calculator", function(req, res){
   

    console.log(req.body);

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1 + n2;

    res.send("The sum of the two no is:"+sum);
});



app.listen(5000, function(req, res){
    console.log("Server is running at port no. 5000");
});

