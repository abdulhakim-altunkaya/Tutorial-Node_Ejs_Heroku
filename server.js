const express = require("express");
const app = express();
const path = require("path");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use("/assets", express.static("public"));
app.use(express.static(path.join(__dirname, './public')));

app.get("/", (req, res) => {
    res.render("home");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/articles", (req, res) => {
    res.render("about");
})


const server = app.listen(process.env.PORT || 4000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);