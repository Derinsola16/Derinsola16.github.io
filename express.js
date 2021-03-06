const express = require("express")

const app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/lessons",function(req,res){
    const data = [
        { topic: 'math', location: 'London', id: 101, price: 100 },
        { topic: 'English', location: 'Liverpool', id: 102, price: 80 },
        { topic: 'Verbal', location: 'Oxford', id: 103, price: 90 },
        { topic: 'Crs', location: 'Bristol', id: 104, price: 120 },
    ]

    res.send(data)
})

app.get("/user", function(req, res){
    res.send({'email': 'user@email.com', 'password':'mypassword'})
})



app.listen(3000, function() {
    console.log("App is running on port 3000");
});

