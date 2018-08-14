const graphql = require('graphql');
const classmutate = require('./classmutate')

module.exports = new graphql.GraphQLObjectType({
    name:"schoolMutate",
    fields:{
        class:{
            type: graphql.GraphQLList(classmutate), 
            args:{
                name:{type: graphql.GraphQLString }
            },
            //resolve:classs.resolve
        },
        schoolName :{
            type : graphql.GraphQLString,
            resolve : (rootValue,args,context)=>{
                return rootValue
            }
        }
    }
})