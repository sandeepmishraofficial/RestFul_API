const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "Sandeep Mishra",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "Shubham Awasthi",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "Abhay tiwari",
        content: "I love coding"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => p.id === id);
    post.content = newContent;
    console.log(post);
    console.log(id);
    res.send("patch request working");
});

app.listen(port, () => {
    console.log("listening on port : 8080");
});
