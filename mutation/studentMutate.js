let graphql = require("graphql");
let chair = require("./chairMutate");

let student = new graphql.GraphQLObjectType({
    name: "studentmuate",
    fields :{
        name:{
            type:graphql.GraphQLString,
            resolve: (rootvalue)=>{
                return rootvalue.studentname
            }
        },
        age:{
            type:graphql.GraphQLInt,
            resolve:(rootvalue)=>{
                return rootvalue.studentage
            }
        },
        chair:{
            type:chair.type,
            resolve:chair.resolve,
        }
    }
})
let type = graphql.GraphQLList(student)
let resolve = (rootvalue , args , context)=>{
    return args.name
}

module.exports = {
    type,
    resolve
}