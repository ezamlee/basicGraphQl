let graphql = require("graphql");
let chairType = require("./chair");

let type = new graphql.GraphQLObjectType({
    name: "student",
    fields :{
        name:{type:graphql.GraphQLString},
        age:{type:graphql.GraphQLInt},
        chair:{
            name:"chair",
            type:chairType.type,
            resolve:chairType.resolve
        }
    }
})

let resolve = (rootvalue , args , context)=>{
    return args.name.map(name => ({
            name,
            age: (5 + Math.floor(Math.random()*18)),
            chair:"1"
        })
    )
}

module.exports = {
    type,
    resolve
}