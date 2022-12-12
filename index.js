var express = require("express");
var bodyparser = require("body-parser");

var app = express();

app.use(express.json());
app.use(bodyparser.json({limit:"50mb"}));
app.use(bodyparser.urlencoded({limit:"50mb",extended:true}));
app.use(express.static("assets"));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    if(req.method=="OPTIONS")
    {
        res.header("Access-Control-Allow-Methods","POST,PATCH,GET,PUT,DELETE");
        return res.status(200).json({});
    }
    next();
})

app.get("/", (req, res)=>{
    res.end("Welcome To node Js Project");
});

app.use("/student", require("./routes/student"));

app.listen(8081,()=>{
    console.log("Project is running on http://localhost:8081/");
})