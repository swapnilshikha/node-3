const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello From Home Page");
});

app.get('/about', (req, res) => {
    return res.send("Hello from About Page "+ " Hey " + req.query.name + " You are " + req.query.age + " years old ");
});

app.listen(8000, () => console.log(" Server Started ! "));

//Express is just a framework , internally HTTP is used ...