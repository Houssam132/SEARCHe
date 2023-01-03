const express = require('express');
const cours = require('./cours');
const users = require('./users');
require("./config");
const app = express();

app.use(express.json());

app.get("/search/:key",async (req,resp)=>{
    let courses = await cours.find(
        {
            "$or":[
                {name:{$regex:req.params.key}},
                {module:{$regex:req.params.key}},
            ]
        }
    )
    let user = await users.find(
        {
            username:{$regex:req.params.key}
               }
    )
    resp.status(200).send("success courses search",(courses))
    resp.status(200).send("success users search",(user))
   

})






app.listen(5000, () => console.log("Server started listening on port: 5000"));
