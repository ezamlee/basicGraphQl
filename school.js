const graphql = require('graphql');
const classs = require('./class')

let school = new graphql.GraphQLObjectType({
    name:"school",
    fields:{
        class:{
            type:classs.type,
            args:{
                name:{type:graphql.GraphQLList(graphql.GraphQLString)}
            },
            resolve:classs.resolve
        },
        schoolName :{
            type : graphql.GraphQLString,
            resolve : (rootValue,args,context)=>{
                return rootValue
            }
        }
    }
})

let type = new graphql.GraphQLList(school)

const resolve = (rootValue,args,context)=>{
    return args.name
}
module.exports = {
    type,
    resolve
}