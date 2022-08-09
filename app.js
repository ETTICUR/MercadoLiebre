const express = require('express')
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');

app.use(express.static("public"));
app.listen(3030, () => {
    console.log("Servidor corriendo en puerto 3030");
});
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/home.html"));
})
app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/register.html"));
})