let graphql = require("graphql");

let type = new graphql.GraphQLObjectType({
    name: "chair",
    fields :{
        row:{ type: graphql.GraphQLInt },
        col:{ type: graphql.GraphQLInt },
    }
})

resolve = (rootvalue,args,context)=>{
    return {
        row:  1 + Math.floor(Math.random()*10) ,
        col:  1 + Math.floor(Math.random()*10)
    }
}


module.exports = {
    type,
    resolve
}