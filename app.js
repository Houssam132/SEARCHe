const express = require('express');
const cours = require('./cours');
require("./config");
const app = express();

app.use(express.json());

app.get("/search/:key",async (req,resp)=>{
    let data = await cours.find(
        {
            "$or":[
                {name:{$regex:req.params.key}},
                {module:{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);

})






app.listen(5000, () => console.log("Server started listening on port: 5000"));