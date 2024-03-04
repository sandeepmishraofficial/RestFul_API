const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username: "sandeep mishra",
        content:"I love coding"
    },
    {
        username: "Shubham Awasthi",
        content:"I love coding"
    },
    {
        username: "Abhay tiwari",
        content:"I love coding"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{ posts })
});

app.get("/posts/new",(req,res)=>{
    res.render( "new.ejs ");
});

app.post("/posts",(req,res)=>{
    console.log("req.body");
    res.send("post request working")
});


app.listen(port, ()=>{
    console.log("listening on port : 8080");
});
