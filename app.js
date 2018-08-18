const express = require('express');
const bodyParser = require("body-parser");
const graphql = require("graphql");
const graphHttp = require("express-graphql");
const schema = require("./schema");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/graphql",graphHttp(async (req,_resp,_graphqlParams)=>
    ({
       schema,
       graphiql:true,
       context:req 
    })
))

app.get("/",(req,res)=>{
    res.send("welcome");
})

app.listen(3000,()=>{
    console.log("welcome");
})

