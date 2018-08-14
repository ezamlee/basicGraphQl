let graphql = require("graphql");

let type = new graphql.GraphQLObjectType({
    name: "chair",
    fields :{
        row:{ type: graphql.GraphQLInt },
        col:{ type: graphql.GraphQLInt },
    }
})

resolve = (rootvalue,args,context)=>{
    return rootvalue.chair
}


module.exports = {
    type,
    resolve
}