const express = require('express');
const app = express()

app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ "users": ['user1', 'user2'] })
})

app.post('/predict', (req, res) => { 
    const data = req.body;
    console.log(data);
    res.json(data)
    
})

app.listen(3001, () =>{console.log("server started on port 3001")})
